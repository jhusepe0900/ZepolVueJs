var t;
axios.get('http://192.168.120.106/api/user/get_token', {
        params: {
          login: 'admin',
          password: 'M1'
        }
      })
      .then(function (response) {
         x = response.data.token;
         t = 'http://192.168.120.106/api/res.partner/search?token='+x;
         console.log("!token: "+x);
         console.log(t);
      })
      .catch(function (error) {
        console.log(error);

      })
      .then(function () {
        // always executed
      });
/* ==============================================================================  */
function busqueda(){
  var u = t;
  var i = 'htpp://192.168.121.193:8069/api/res.partner/search?token=';
  var o =  "&&domain=[('customer','=', True)]&offset=10&limit=6&fields=['name','phone']";
   /* localhost:8069/api/res.partner/search?token=cd7bdf0dfb7d4d74b08d3eae84af934c&&domain=[('customer','=', True)]&offset=10&limit=2&fields=['name','phone'] */
   var er = u+o;
   var ti = er;
   console.log(ti);
  window.open(er);
  return er;
}

