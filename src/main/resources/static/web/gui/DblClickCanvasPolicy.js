
var css="h"
var myfigure= new Object()
var counter=0
var shape2= new Object()
var myuserdata=[]
function myOperation2(){
  document.getElementById("var1Label").hidden=true
  document.getElementById("var2Label").hidden= true  
  document.getElementById("var2text").hidden=true
  document.getElementById("var1text").hidden=true
  document.getElementById("resultBut").hidden=true
  document.getElementById("conditionIn").hidden=false
  document.getElementById("conditionBut").hidden=false
  document.getElementById("saveVariables").hidden=true
    document.getElementById("varName").hidden= true
    document.getElementById("inpName").hidden=true
     document.getElementById("mySelect").hidden=true
     document.getElementById("endAdd").hidden=true
                     document.getElementById("endlist").hidden=true
  myuserdata.push(document.getElementById("conditionIn").value)
  myfigure.userData=myuserdata
  myfigure.text= document.getElementById("conditionIn").value
  }

var DblClickCanvasPolicy = draw2d.policy.canvas.CanvasPolicy.extend({

    init : function()
    {
        this._super();
    },

    /**
     * @method
     * Called by the canvas if the user double click on a figure.
     *
     * @param {draw2d.Figure} the figure under the double click event. Can be null
     * @param {Number} mouseX the x coordinate of the mouse during the click event
     * @param {Number} mouseY the y coordinate of the mouse during the click event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     *
     */
    onDoubleClick: function(figure, mouseX, mouseY, shiftKey, ctrlKey)
    {

      console.log(figure)
            css=figure.cssClass

            if(figure.cssClass==="diamond" || figure.cssClass==="draw2d_shape_basic_Label")
            {
               document.getElementById("var1Label").hidden=true
               document.getElementById("var2Label").hidden= true  
               document.getElementById("var2text").hidden=true
               document.getElementById("var1text").hidden=true
               document.getElementById("resultBut").hidden=true
               document.getElementById("saveVariables").hidden=true
               document.getElementById("varName").hidden= true
               document.getElementById("inpName").hidden=true
                document.getElementById("conditionIn").hidden=false
               document.getElementById("conditionBut").hidden=false
               document.getElementById("CondLabel").hidden=false
                    document.getElementById("endAdd").hidden=true

 document.getElementById("mySelect").hidden=true
                 document.getElementById("endlist").hidden=true
               
            }
            else if (figure.cssClass==="start")
            {

            document.getElementById("saveVariables").hidden=false
              document.getElementById("varName").hidden= false
           document.getElementById("inpName").hidden=false
             document.getElementById("var1Label").hidden=true
               document.getElementById("var2Label").hidden= true
               document.getElementById("var2text").hidden=true
               document.getElementById("var1text").hidden=true
               document.getElementById("resultBut").hidden=true
             document.getElementById("conditionIn").hidden=true
               document.getElementById("conditionBut").hidden=true
               document.getElementById("CondLabel").hidden=true
                document.getElementById("mySelect").hidden=true
                                document.getElementById("endlist").hidden=true
                                     document.getElementById("endAdd").hidden=true

            }
            else if( figure.cssClass==="end")
            {
     document.getElementById("endAdd").hidden=false
                 document.getElementById("saveVariables").hidden=true
                  document.getElementById("mySelect").hidden=false
                 document.getElementById("endlist").hidden=false
                  document.getElementById("var1text").hidden= true
                document.getElementById("inpName").hidden=true
                document.getElementById("var1Label").hidden=true
                   document.getElementById("var2Label").hidden= true
                   document.getElementById("var2text").hidden=true
                   document.getElementById("var1text").hidden=true
                   document.getElementById("resultBut").hidden=true
                document.getElementById("conditionIn").hidden=true
                   document.getElementById("conditionBut").hidden=true
                   document.getElementById("CondLabel").hidden=true

                    document.getElementById("varName").hidden=true

            }
            else if(figure.cssClass==="NOT")
            {
                 document.getElementById("endAdd").hidden=true

            document.getElementById("var2text").text="";
            document.getElementById("var1text").text="";
           document.getElementById("var1Label").hidden=false
              document.getElementById("var2Label").hidden= true  
              document.getElementById("var2text").hidden=true
              document.getElementById("var1text").hidden=false
              document.getElementById("resultBut").hidden=false    
           document.getElementById("saveVariables").hidden=true
               document.getElementById("varName").hidden= true
              document.getElementById("inpName").hidden=true
               document.getElementById("conditionIn").hidden=true
              document.getElementById("conditionBut").hidden=true
              document.getElementById("CondLabel").hidden=true

     document.getElementById("mySelect").hidden=true
                     document.getElementById("endlist").hidden=true
            }
            else if (figure.cssClass==="subtraction" || figure.cssClass==="addition"|| figure.cssClass==="division" ||figure.cssClass==="multiplication" || figure.cssClass==="OR"|| figure.cssClass==="AND" || figure.cssClass==="NOT"){
           document.getElementById("var2text").text="";
           document.getElementById("var1text").text="";
             document.getElementById("endAdd").hidden=true
            document.getElementById("var1Label").hidden=false
            document.getElementById("var2Label").hidden=false   
            document.getElementById("var2text").hidden=false
            document.getElementById("var1text").hidden=false
            document.getElementById("resultBut").hidden=false
            document.getElementById("conditionIn").hidden=true
            document.getElementById("conditionBut").hidden=true
            document.getElementById("saveVariables").hidden=true
              document.getElementById("varName").hidden= true
              document.getElementById("inpName").hidden=true
            document.getElementById("CondLabel").hidden=true

     document.getElementById("mySelect").hidden=true
                     document.getElementById("endlist").hidden=true

            }
            else
            {
                 document.getElementById("endAdd").hidden=true
             document.getElementById("var1Label").hidden=true
                        document.getElementById("var2Label").hidden=true
                        document.getElementById("var2text").hidden=true
                        document.getElementById("var1text").hidden=true
                        document.getElementById("resultBut").hidden=true
                        document.getElementById("conditionIn").hidden=true
                        document.getElementById("conditionBut").hidden=true
                        document.getElementById("saveVariables").hidden=true
                          document.getElementById("varName").hidden= true
                        document.getElementById("inpName").hidden=true
                        document.getElementById("CondLabel").hidden=true

     document.getElementById("mySelect").hidden=true
                     document.getElementById("endlist").hidden=true
            }


            myfigure=figure
        
      }
      
});
