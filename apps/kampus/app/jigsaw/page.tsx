"use client";

import { useEffect, useRef } from "react";
// @ts-ignore
import { Canvas, generators, painters } from "headbreaker";

export default function JigsawHome() {
  return (
    <main>
      <h1>Jigsaw</h1>
      <Jigsaw id="puzzle" />;
    </main>
  );
}

interface JigsawProps {
  id: string;
}

interface Position {
  x: number;
  y: number;
}

interface Piece {
  id: string;
  centralAnchor: Position;
}

const Jigsaw = ({ id }: JigsawProps) => {
  const puzzleRef = useRef<HTMLDivElement>(null);
  // const [correctPiecesMap, setCorrectPiecesMap] = useState([]);

  useEffect(() => {
    const img = new Image();
    img.src = "/digital-campus.png";
    img.onload = () => {
      const puzzle = puzzleRef.current;
      if (!puzzle) return;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
      const canvas = new Canvas(puzzle.id, {
        width: 800,
        height: 600,
        pieceSize: 100,
        proximity: 20,
        borderFill: 10,
        strokeWidth: 2,
        lineSoftness: 0.18,
        painter: new painters.Konva(),
        image: img,
        preventOffstageDrag: true,
        fixed: true,
      });

      const neighborMap = {} as Record<string, string[]>;

      canvas.registerKeyboardGestures({ 18: (puzzle) => puzzle.forceConnectionWhileDragging() });
      canvas.adjustImagesToPuzzleHeight();
      canvas.autogenerate({
        insertsGenerator: generators.flipflop,
        horizontalPiecesCount: 4,
        verticalPiecesCount: 5,
      });

      const pieces = canvas._puzzle.pieces as Piece[];

      pieces.forEach((piece: Piece) => {
        const pieceId = piece.id;
        neighborMap[pieceId] = constructNeighbours(piece, pieces);
      });

      const canConnectPieces = (piece1: Piece, piece2: Piece) => {
        const pieceId1 = piece1.id;
        const pieceId2 = piece2.id;
        const neighbors1 = neighborMap[pieceId1];
        const neighbors2 = neighborMap[pieceId2];

        // Check if pieceId2 is a neighbor of pieceId1
        if (neighbors1 && neighbors1.includes(pieceId2)) {
          return true;
        }

        // Check if pieceId1 is a neighbor of pieceId2
        if (neighbors2 && neighbors2.includes(pieceId1)) {
          return true;
        }

        // Pieces are not connected
        return false;
      };
      canvas.shuffle(0.7);
      canvas.attachConnectionRequirement(canConnectPieces);
      canvas.draw();
    };

    img.onerror = () => {
      console.error("Failed to load image");
    };
  }, []);

  return <div ref={puzzleRef} id={id}></div>;
};

const constructNeighbours = (piece: Piece, puzzlePieces: Piece[]): string[] => {
  const connectedPieces: string[] = [];

  // Extract the position of the current piece
  const { x: pieceX, y: pieceY } = piece.centralAnchor;

  // Define the positions of adjacent pieces based on your puzzle grid
  const adjacentPositions = [
    { x: pieceX - 100, y: pieceY }, // Left
    { x: pieceX + 100, y: pieceY }, // Right
    { x: pieceX, y: pieceY - 100 }, // Top
    { x: pieceX, y: pieceY + 100 }, // Bottom
  ];

  // Iterate through adjacent positions and check if there are pieces at those positions
  adjacentPositions.forEach((position) => {
    const { x, y } = position;

    // Find the piece at the current position
    const adjacentPiece = puzzlePieces.find(
      (puzzlePiece) => puzzlePiece.centralAnchor.x === x && puzzlePiece.centralAnchor.y === y
    );

    // If an adjacent piece is found, add its identifier to the connectedPieces array
    if (adjacentPiece) {
      connectedPieces.push(adjacentPiece.id);
    }
  });

  return connectedPieces;
};
