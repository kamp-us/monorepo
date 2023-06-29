export default function domainFilter(req, res, next) {
    const allowedDomains = ['kamp.us'];
  
    const host = req.headers.host || '';
    const domain = host.split(':')[0];
    const isValidDomain = allowedDomains.some((allowedDomain) => {
      const regex = new RegExp(`\\.${allowedDomain}$`, 'i');
      return regex.test(domain);
    });
  
    if (!isValidDomain) {
      res.status(403).end('Access Forbidden');
      return;
    }
  
    next();
  }
  