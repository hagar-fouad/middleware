// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var diamond = draw2d.shape.basic.Polygon.extend({            

    NAME: "diamond",
 
    init:function(attr, setter, getter)
    {
        
      this._super( $.extend({stroke:0,resizable:false, bgColor:"grey",color:"grey", width:80,height:80},attr), setter, getter);

        this.resetVertices();
      let box = this.getBoundingBox()
      this.addVertex(box.w / 2, 0)       // Go to the top center..
      this.addVertex(box.w, box.h / 2) // ...draw line to the right middle
      this.addVertex(box.w / 2, box.h)   // ...bottom center...
      this.addVertex(0, box.h / 2) // ...left middle...
   
      this.setResizeable(false)
      var port;
      // Port

      port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(1.5151515151515151, 50));
      port.setConnectionDirection();
      port.setBackgroundColor("#37B1DE");
      port.setName("Port");
      port.setMaxFanOut(20);
      this.persistPorts=false;
      // Port
      port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(98.48484848484848, 50));
      port.setConnectionDirection();
      port.setBackgroundColor("#37B1DE");
      port.setName("Port");
      port.setMaxFanOut(20);
      // Port
      port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(50, 0));
      port.setConnectionDirection();
      port.setBackgroundColor("#37B1DE");
      port.setName("Port");
      port.setMaxFanOut(20);
      this.persistPorts=false;

      ///////////
      
      this.label = new draw2d.shape.basic.Label({text:"condition", color:"#0d0d0d", fontColor:"#0d0d0d"});
      
      // add the new decoration to the connection with a position locator.
      //
      this.add(this.label, new draw2d.layout.locator.CenterLocator(this));
      
      this.label.installEditor(new draw2d.ui.LabelInplaceEditor());
      
    },
 
    createShapeElement : function()
    {
        
       var shape = this._super();
       this.originalWidth = 66;
       this.originalHeight= 66;
       return shape;
     
    },
 
    createSet: function()
    {
        // this.canvas.paper.setStart();
 
        //  // BoundingBox
        //  shape = this.canvas.paper.path("M0,0 L66,0 L66,66 L0,66");
        //  shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        //  shape.data("name","BoundingBox");
         
        //  // Circle
        //  shape = this.canvas.paper.ellipse();
        //  shape.attr({"rx":33,"ry":33,"cx":33,"cy":33,"stroke":"none","stroke-width":0,"fill":"#A60C0C","dasharray":null,"opacity":1});
        //  shape.data("name","Circle");
         
        //  // Label
        //  shape = this.canvas.paper.text(0,0,'OR');
        //  shape.attr({"x":15.5546875,"y":31.5,"text-anchor":"start","text":"OR","font-family":"\"Arial\"","font-size":23,"stroke":"none","fill":"#FAFAFA","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        //  shape.data("name","Label");
         
 
        //  return this.canvas.paper.setFinish();
    },
 
    applyAlpha: function()
    {
    },
 
    layerGet: function(name, attributes)
    {
       if(this.svgNodes===null) return null;
 
       var result=null;
       this.svgNodes.some(function(shape){
          if(shape.data("name")===name){
             result=shape;
          }
          return result!==null;
       });
 
       return result;
    },
 
    layerAttr: function(name, attributes)
    {
      if(this.svgNodes===null) return;
 
      this.svgNodes.forEach(function(shape){
              if(shape.data("name")===name){
                   shape.attr(attributes);
              }
      });
      
    },
 
    layerShow: function(name, flag, duration)
    {
       if(this.svgNodes===null) return;
 
       if(duration){
         this.svgNodes.forEach(function(node){
             if(node.data("name")===name){
                 if(flag){
                     node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                 }
                 else{
                     node.animate({ opacity : 0 }, duration, function () { this.hide() });
                 }
             }
         });
       }
       else{
           this.svgNodes.forEach(function(node){
               if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
       }
       
    },
 
     calculate: function()
     {
     },
 
     onStart: function()
     {
     },
 
     onStop:function()
     {
     },
 
     getParameterSettings: function()
     {
         return [];
     },
 
     /**
      * @method
      */
     addPort: function(port, locator)
     {
         this._super(port, locator);
         
         return port;
     },
 
     /**
      * @method
      * Return an objects with all important attributes for XML or JSON serialization
      *
      * @returns {Object}
      */
     getPersistentAttributes : function()
     {
         var memento = this._super();
 
         // add all decorations to the memento
         //
         memento.labels = [];
         this.children.each(function(i,e){
             var labelJSON = e.figure.getPersistentAttributes();
             labelJSON.locator=e.locator.NAME;
             memento.labels.push(labelJSON);
         });
 
         return memento;
     },
 
     /**
      * @method
      * Read all attributes from the serialized properties and transfer them into the shape.
      *
      * @param {Object} memento
      * @returns
      */
     setPersistentAttributes : function(memento)
     {
         this._super(memento);
 
         // remove all decorations created in the constructor of this element
         //
         this.resetChildren();
 
         // and add all children of the JSON document.
         //
         $.each(memento.labels, $.proxy(function(i,json){
             // create the figure stored in the JSON
             var figure =  eval("new "+json.type+"()");
 
             // apply all attributes
             figure.attr(json);
 
             // instantiate the locator
             var locator =  eval("new "+json.locator+"()");
 
             // add the new figure as child to this figure
             this.add(figure, locator);
         },this));
     }
 });
 
 /**
  * by 'Draw2D Shape Designer'
  *
  * Custom JS code to tweak the standard behaviour of the generated
  * shape. add your custome code and event handler here.
  *
  *
  */
 diamond = diamond.extend({
 
     init: function(attr, setter, getter){
          this._super(attr, setter, getter);
          
 
          // your special code here
     },
 
     /**
      *  Called by the simulator for every calculation
      *  loop
      *  @required
      **/
     calculate:function()
     {
     },
 
 
     /**
      *  Called if the simulation mode is starting
      *  @required
      **/
     onStart:function()
     {
     },
 
     /**
      *  Called if the simulation mode is stopping
      *  @required
      **/
     onStop:function()
     {
     }
     

 });