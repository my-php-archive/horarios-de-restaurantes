var app;app=angular.module("yapp"),app.controller("HorariosController",["$scope","$compile",function(o,r){return o.dias=[{id:1,nombre:"Domingo",checked:!1,horarios:[]},{id:2,nombre:"Lunes",checked:!1,horarios:[]},{id:3,nombre:"Martes",checked:!1,horarios:[]},{id:4,nombre:"Miercoles",checked:!1,horarios:[]},{id:5,nombre:"Jueves",checked:!1,horarios:[]},{id:6,nombre:"Viernes",checked:!1,horarios:[]},{id:7,nombre:"Sábado",checked:!1,horarios:[]}],o.timePickerOptions={show2400:!1,timeFormat:"H:i",appendTo:"body"},o.add=function(r){return o.dias[r].horarios.push({apertura:"",cierre:""})},o.save=function(){return console.log(JSON.stringify(o.dias))}}]);