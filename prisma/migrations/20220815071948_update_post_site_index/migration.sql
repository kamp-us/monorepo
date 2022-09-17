-- DropIndex
DROP INDEX "Post_site_key";

-- CreateIndex
CREATE INDEX "Post_site_idx" ON "Post"("site");
