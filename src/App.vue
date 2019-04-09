<template>
  <div id="app">
    <vue-dropdown
      :config="config"
      @setSelectedOption="setNewSelectedOption($event);"
    ></vue-dropdown>
  </div>
</template>

<script>
import vueDropdown from "./components/vue-dropdown/vue-dropdown";

export default {
  name: "App",
  components: {
    vueDropdown
  },
  data: function() {
    return {
      config: {
        options: [
          {
              "phone": "+591 77760879", 
              "value": "AERIS TESLA", 
              "id": 1565
              }, 

              {
              "phone": false, 
              "value": "Oscar Harriague", 
              "id": 1566
              }, 

              {
              "phone": "+591 68843100", 
              "value": "AGROFINCA ", 
              "id": 1497
              }, 

              {
              "phone": "+591 68843100", 
              "value": "Sr. Johan ", 
              "id": 1498
              }, 

              {
              "phone": "72083337", 
              "value": "red", 
              "id": 933
              }, 

              {
              "phone": "72083337", 
              "value": "Dra. Analia Gonzales", 
              "id": 934
        }
        ],
        prefix: "",
        placeholder: '#Operador',
        backgroundColor: "#4CAF50",
        textColor: "white",
        borderRadius: "10px",
        border: "35px ",
        width: 250,
          height: 250
      }
    };
  },
  methods: {
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
      this.config.textColor = selectedOption.value;
    }
  }
};
</script>

<!-- Diseno de los botones -->
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: white;
  /*margin-top: 60px;*/
          position: relative;
          background-color: #4CAF50;
          border: 1em;
          font-size: 20px;
          color: #FFFFFF;
          padding: 20px;
          width: 256px;
          height: 47px;
          text-align: center;
          -webkit-transition-duration: 0.4s; /* Safari */
          transition-duration: 0.4s;
          text-decoration: none;
          /*overflow: hidden;*/
          cursor: pointer;
}
body {
  margin:0px;
  background-image:none;
  position:static;
  left:auto;
  width:1268px;
  margin-left:0;
  margin-right:0;
  text-align:left;
}
#base {
  position:absolute;
  z-index:0;
}
#u0_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1320px;
  height:830px;
  background:inherit;
  background-color:rgb(255, 255, 255);
  box-sizing:border-box;
  border-width:1px;
  border-style:solid;
  border-color:rgb(255, 255, 255); /*  color de border-linea  */
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u0 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1268px;
  height:825px;
}
#u0_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u1_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:296px;
  height:87px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u1 {
  border-width:0px;
  position:absolute;
  left:26px;
  top:20px;
  width:296px;
  height:87px;
}
#u1_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u2_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:599px;
  height:87px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u2 {
  border-width:0px;
  position:absolute;
  left:357px;
  top:20px;
  width:599px;
  height:87px;
}
#u2_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u3_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:296px;
  height:87px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u3 {
  border-width:0px;
  position:absolute;
  left:996px;
  top:20px;
  width:244px;
  height:87px;
}
#u3_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u4_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:296px;
  height:87px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u4 {
  border-width:0px;
  position:absolute;
  left:26px;
  top:134px;
  width:296px;
  height:87px;
}
#u4_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u5_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:180px;
  height:87px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u5 {
  border-width:0px;
  position:absolute;
  left:357px;
  top:134px;
  width:180px;
  height:87px;
}
#u5_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u6_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:180px;
  height:87px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u6 {
  border-width:0px;
  position:absolute;
  left:567px;
  top:134px;
  width:180px;
  height:87px;
}
#u6_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u7_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:180px;
  height:87px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u7 {
  border-width:0px;
  position:absolute;
  left:776px;
  top:134px;
  width:180px;
  height:87px;
}
#u7_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u8_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:296px;
  height:87px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u8 {
  border-width:0px;
  position:absolute;
  left:220px; /* */ 
  top:0px;
  width:144px;
  height:87px;
}
#u8_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u9_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:380px;
  height:180px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u9 {
  border-width:0px;
  position:absolute;
  left:-750px;
  top:120px;
  width:380px;
  height:180px;
}
#u9_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u10_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:380px;
  height:180px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u10 {
  border-width:0px;
  position:absolute;
  left:-750px;
  top:340px;
  width:380px;
  height:180px;
}
#u10_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u11_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:380px;
  height:180px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u11 {
  border-width:0px;
  position:absolute;
  left:-323px;
  top:120px;
  width:380px;
  height:180px;
}
#u11_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u12_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:380px;
  height:180px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u12 {
  border-width:0px;
  position:absolute;
  left:-323px;
  top:340px;
  width:380px;
  height:180px;
}
#u12_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u13_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:244px;
  height:180px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u13 {
  border-width:0px;
  position:absolute;
  left:100px;
  top:220px;
  width:244px;
  height:180px;
}
#u13_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u14_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:385px;
  height:190px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
/*  CAJA DE REGISTRO  */
#u14 {  
  border-width:0px;
  position:absolute;
  left:96px;
  top:340px;
  width:244px;
  height:180px;
}
#u14_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u15 {
  border-width:0px;
  position:absolute;
  left:-750px;
  top:550px;
  width:1141px;
  height:25px;
}
#u15_input {
  position:absolute;
  left:0px;
  top:0px;
  width:1141px;
  height:25px;
  font-family:'Arial Normal', 'Arial';
  font-weight:400;
  font-style:normal;
  font-size:13px;
  text-decoration:none;
  color:#000000;
  text-align:left;
}
#u16 {
  border-width:0px;
  position:absolute;
  left:-750px;
  top:590px;
  width:1141px;
  height:25px;
}
#u16_input {
  position:absolute;
  left:0px;
  top:0px;
  width:1141px;
  height:25px;
  font-family:'Arial Normal', 'Arial';
  font-weight:400;
  font-style:normal;
  font-size:13px;
  text-decoration:none;
  color:#000000;
  text-align:left;
}
#u17 {
  border-width:0px;
  position:absolute;
  left:-750px;
  top:630px;
  width:1141px;
  height:25px;
}
#u17_input {
  position:absolute;
  left:0px;
  top:0px;
  width:1141px;
  height:25px;
  font-family:'Arial Normal', 'Arial';
  font-weight:400;
  font-style:normal;
  font-size:13px;
  text-decoration:none;
  color:#000000;
  text-align:left;
}

#u18 {
  border-width:0px;
  position:absolute;
  left:140px;
  top:110px;
  width:396px;
  height:87px;
}
#u18_input {
  position:absolute;
  left:0px;
  top:0px;
  width:296px;
  height:87px;
  font-family:'Arial Normal', 'Arial';
  font-weight:400;
  font-style:normal;
  font-size:67px;
  text-decoration:none;
  color:#000000;
  text-align:left;
}
#u19_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:396px;
  height:87px;
  background:inherit;
  background-color:rgba(242, 242, 242, 1);
  border:none;
  border-radius:1em;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u19 {
  border-width:0px;
  position:absolute;
  left:300px;
  top:220px;
  width:244px;
  height:180px;
}
#u19_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
/*BUTTONS*/
.button {
    position: relative;
    background-color: #4CAF50;
    border: none;
    font-size: 28px;
    color: #FFFFFF;
    padding: 20px;
    width: 296px;
    height: 87px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.button:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
.buttonG {
    position: relative;
    background-color: #4CAF50;
    border: none;
    font-size: 28px;
    color: #FFFFFF;
    padding: 20px;
    width: 599px;
    height: 87px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.buttonG:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.buttonG:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
.buttonL {
    position: relative;
    background-color: #4CAF50;
    border: none;
    font-size: 28px;
    color: #FFFFFF;
    padding: 20px;
    width: 180px;
    height: 87px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.buttonL:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.buttonL:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
.buttonL {
    position: relative;
    background-color: #4CAF50;
    border: none;
    font-size: 28px;
    color: #FFFFFF;
    padding: 20px;
    width: 180px;
    height: 87px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.buttonL:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.buttonL:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
.buttonGig {
    position: relative;
    background-color: #4CAF50;
    border: none;
    font-size: 28px;
    color: #FFFFFF;
    padding: 20px;
    width: 380px;
    height: 188px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.buttonGig:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.buttonGig:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}

.buttonStop {
    position: relative;
    background-color: #860808;
    border: none;
    font-size: 28px;
    color: #FFFFFF;
    padding: 20px;
    width: 180px;
    height: 87px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.buttonStop:after {
    content: "";
    background: #860808;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.buttonStop:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
.buttonStop {
    position: relative;
    background-color: #F70B01;
    border: none;
    font-size: 28px;
    color: #FFFFFF;
    padding: 20px;
    width: 180px;
    height: 87px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.buttonStop:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.buttonStop:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}

</style>
