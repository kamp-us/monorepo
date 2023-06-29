import { createRequestHandler } from 'next';
import domainFilter from '../middleware/domainFilter';

export default createRequestHandler({
  async api(req, res) {
    await domainFilter(req, res, async () => {
     res.status(200).json({ message: 'Basarili' });
    });
  },
});
