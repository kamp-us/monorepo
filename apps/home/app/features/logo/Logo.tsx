export const Logo = ({ height, width }: { height: number, width: number }) => {
  return (
    <img src="https://kampus-logo.s3.eu-central-1.amazonaws.com/kampus_logo.png" style={{ height: `${height}px`, width: `${width}px` }} alt="logo" />
  )
}