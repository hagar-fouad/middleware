
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
    document.getElementById("varValue").hidden=true
    document.getElementById("inpName").hidden=true
    document.getElementById("inpValue").hidden=true
     document.getElementById("mySelect").hidden=true
     document.getElementById("endAdd").hidden=true
                     document.getElementById("endlist").hidden=true
  myuserdata.push(document.getElementById("conditionIn").value)
  myfigure.userData=myuserdata
  myfigure.text= document.getElementById("conditionIn").value
  }
function myOperation(v1,v2,name1,name2)
       {
 
        var userDataDic = {}
        var temp
        counter++
        document.getElementById("resLabel").hidden=false
        document.getElementById("resultIn").hidden=false
        if(css==="addition"){
          
           temp=parseInt(v1)+parseInt(v2)
          
          document.getElementById("resultIn").value=temp
        
        }
        if(css==="subtraction"){
             temp=parseInt(v1)-parseInt(v2)
             document.getElementById("resultIn").value=temp
           
           }
           if(css==="division"){
             temp=parseInt(v1)/parseInt(v2)
             document.getElementById("resultIn").value=temp
           
           }
           if(css==="multiplication"){
             temp=parseInt(v1)*parseInt(v2)
             document.getElementById("resultIn").value=temp
           
           }
           if(css==="OR"){

            temp=parseInt(v1)||parseInt(v2)
            document.getElementById("resultIn").value=temp
          
          }
          if(css==="AND"){
             temp=parseInt(v1)&&parseInt(v2)
            document.getElementById("resultIn").value=temp
          
          }
          if(css==="NOT"){
            temp=!parseInt(v1)
            document.getElementById("resultIn").value=temp
          
          }
          userDataDic[name1]=parseInt(v1)
          userDataDic[name2]=parseInt(v2)
           userDataDic["result"+counter]=temp
          //myfigure.userData=userDataDic
          console.log(myfigure)
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
            //myfigure=figure
            if(figure.cssClass==="diamond" || figure.cssClass==="draw2d_shape_basic_Label")
            {
               document.getElementById("var1Label").hidden=true
               document.getElementById("var2Label").hidden= true  
               document.getElementById("var2text").hidden=true
               document.getElementById("var1text").hidden=true
               document.getElementById("resultBut").hidden=true    
               document.getElementById("resLabel").hidden=true
               document.getElementById("resultIn").hidden=true
               document.getElementById("saveVariables").hidden=true
               document.getElementById("varName").hidden= true
               document.getElementById("varValue").hidden=true
              document.getElementById("inpName").hidden=true
              document.getElementById("inpValue").hidden=true
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
              document.getElementById("varValue").hidden=false
              document.getElementById("inpName").hidden=false
              document.getElementById("inpValue").hidden=false
               document.getElementById("var1Label").hidden=true
               document.getElementById("var2Label").hidden= true
               document.getElementById("var2text").hidden=true
               document.getElementById("var1text").hidden=true
               document.getElementById("resultBut").hidden=true
               document.getElementById("resLabel").hidden=true
               document.getElementById("resultIn").hidden=true
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
                 //document.getElementById("AddE").hidden=false
                 document.getElementById("mySelect").hidden=false
                 document.getElementById("endlist").hidden=false
                  document.getElementById("var1text").hidden= true
                  document.getElementById("varValue").hidden=true
                  document.getElementById("inpName").hidden=true
                  document.getElementById("inpValue").hidden=true
                   document.getElementById("var1Label").hidden=true
                   document.getElementById("var2Label").hidden= true
                   document.getElementById("var2text").hidden=true
                   document.getElementById("var1text").hidden=true
                   document.getElementById("resultBut").hidden=true
                   document.getElementById("resLabel").hidden=true
                   document.getElementById("resultIn").hidden=true
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
            document.getElementById("resultIn").text="";
              document.getElementById("var1Label").hidden=false
              document.getElementById("var2Label").hidden= true  
              document.getElementById("var2text").hidden=true
              document.getElementById("var1text").hidden=false
              document.getElementById("resultBut").hidden=false    
              document.getElementById("resLabel").hidden=true
              document.getElementById("resultIn").hidden=true
             document.getElementById("saveVariables").hidden=true
               document.getElementById("varName").hidden= true
               document.getElementById("varValue").hidden=true
               document.getElementById("inpName").hidden=true
               document.getElementById("inpValue").hidden=true
              document.getElementById("conditionIn").hidden=true
              document.getElementById("conditionBut").hidden=true
              document.getElementById("CondLabel").hidden=true

     document.getElementById("mySelect").hidden=true
                     document.getElementById("endlist").hidden=true
            }
            else if (figure.cssClass==="subtraction" || figure.cssClass==="addition"|| figure.cssClass==="division" ||figure.cssClass==="multiplication" || figure.cssClass==="OR"|| figure.cssClass==="AND" || figure.cssClass==="NOT"){
           document.getElementById("var2text").text="";
           document.getElementById("var1text").text="";
           document.getElementById("resultIn").text="";
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
              document.getElementById("varValue").hidden=true
              document.getElementById("inpName").hidden=true
              document.getElementById("inpValue").hidden=true
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
                          document.getElementById("varValue").hidden=true
                          document.getElementById("inpName").hidden=true
                          document.getElementById("inpValue").hidden=true
                        document.getElementById("CondLabel").hidden=true

     document.getElementById("mySelect").hidden=true
                     document.getElementById("endlist").hidden=true
            }

            //alert(   JSON.stringify(figure.cssClass)   )
            myfigure=figure
           // console.log(figure.inputPorts.data[0].connections.data[0].sourcePort.parent.userData)
            
                    
        
      }
      
});
