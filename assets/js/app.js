var app;app=angular.module("yapp",[]),app.controller("mainCtrl",["$scope","$compile",function(e,o){return e.dias=[{id:1,nombre:"Domingo",checked:!1,horarios:[]},{id:2,nombre:"Lunes",checked:!1,horarios:[]},{id:3,nombre:"Martes",checked:!1,horarios:[]},{id:4,nombre:"Miercoles",checked:!1,horarios:[]},{id:5,nombre:"Jueves",checked:!1,horarios:[]},{id:6,nombre:"Viernes",checked:!1,horarios:[]},{id:7,nombre:"Sábado",checked:!1,horarios:[]}],e.timePickerOptions={show2400:!1,timeFormat:"H:i",appendTo:"body"},e.diasUpdate=function(){},e.add=function(o){return e.dias[o].horarios.push({apertura:"",cierre:""})},e.save=function(){return console.log(e.dias)}}]);