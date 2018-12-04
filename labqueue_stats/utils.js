/**
 * Group an array objects by the provided key.
 * https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-a-array-of-objects
 *
 *
 */
export function groupBy(arr, key) {
  return arr.reduce(function(accumulated, item) {
    (accumulated[item[key]] = accumulated[item[key]] || []).push(item);
    return accumulated;
  }, {});
}

export class CASClient {
  constructor() {
    this.casURL = "https://fed.princeton.edu/cas/";
  }
  authenticate() {}
  validate() {}
}

// class CASClient:
//    def __init__(self):
//       self.cas_url = 'https://fed.princeton.edu/cas/'
//    def Authenticate(self):
//       # If the request contains a login ticket, try to validate it
//       if form.has_key('ticket'):
//          netid = self.Validate(form['ticket'].value)
//          if netid != None:
//             return netid
//       # No valid ticket; redirect the browser to the login page to get one
//       login_url = self.cas_url + 'login' \
//          + '?service=' + urllib.quote(self.ServiceURL())
//       print 'Location: ' + login_url
//       print 'Status-line: HTTP/1.1 307 Temporary Redirect'
//       print ""
//       sys.exit(0)
//    def Validate(self, ticket):
//       val_url = self.cas_url + "validate" + \
//          '?service=' + urllib.quote(self.ServiceURL()) + \
//          '&ticket=' + urllib.quote(ticket)
//       r = urllib.urlopen(val_url).readlines()   # returns 2 lines
//       if len(r) == 2 and re.match("yes", r[0]) != None:
//          return r[1].strip()
//       return None
//    def ServiceURL(self):
//       if os.environ.has_key('REQUEST_URI'):
//          ret = 'http://' + os.environ['HTTP_HOST'] + os.environ['REQUEST_URI']
//          ret = re.sub(r'ticket=[^&]*&?', '', ret)
//          ret = re.sub(r'\?&?$|&$', '', ret)
//          return ret
//          #$url = preg_replace('/ticket=[^&]*&?/', '', $url);
//          #return preg_replace('/?&?$|&$/', '', $url);
//       return "something is badly wrong"
