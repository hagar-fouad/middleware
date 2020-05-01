example.Toolbar = Class.extend({

	init:function(elementId, view){
		this.html = $("#"+elementId);
		this.view = view;


		// register this class as event listener for the canvas
		// CommandStack. This is required to update the state of
		// the Undo/Redo Buttons.
		//
		view.getCommandStack().addEventListener(this);

		// Register a Selection listener for the state hnadling
		// of the Delete Button
		//
        view.on("select", $.proxy(this.onSelectionChanged,this));

		// Inject the UNDO Button and the callbacks
		//
		this.undoButton  = $("<button>Undo</button>");
		this.html.append(this.undoButton);
		this.undoButton.button().click($.proxy(function(){
		       this.view.getCommandStack().undo();
		},this)).button( "option", "disabled", true );

		  this.OpenButton  = $("<button>open</button>");
		this.html.append(this.OpenButton);
		this.OpenButton.button().click($.proxy(function(){
		var urlParams = new URLSearchParams(window.location.search);
var openWN=document.getElementById("workflowName").value
         var token= urlParams.get('token'); //
              $.ajax({
				type: "POST",
				url: "/wn",
				headers: {"Authorization": "Bearer "+token},
				data:openWN,
				//success: getSuccess ,
				//contentType: "application/json",
				dataType: "text"
			  });
			  var urlParams = new URLSearchParams(window.location.search);

                       var token= urlParams.get('token'); //

			$.ajax({
				type: "GET",
				url: "/workflow",
				headers: {"Authorization": "Bearer "+token},

				//data:JSON.stringify(shape),
				success: getSuccess ,
				contentType: "application/json",
				//dataType: 'json'
			  });
		},this)).button( "option", "disabled", false );


		this.redoButton  = $("<button>Redo</button>");
        		this.html.append(this.redoButton);
        		this.redoButton.button().click($.proxy(function(){
        		    this.view.getCommandStack().redo();
        		},this)).button( "option", "disabled", true );

        		this.delimiter  = $("<span class='toolbar_delimiter'>&nbsp;</span>");
        		this.html.append(this.delimiter);

        		// Inject the DELETE Button
        		//
        		this.deleteButton  = $("<button>Delete</button>");
        		this.html.append(this.deleteButton);
        		this.deleteButton.button().click($.proxy(function(){
        			var node = this.view.getPrimarySelection();
        			var command= new draw2d.command.CommandDelete(node);
        			this.view.getCommandStack().execute(command);
        		},this)).button( "option", "disabled", true );

		this.SaveButton  = $("<button>Save</button>");
        		this.html.append(this.SaveButton);
        		this.SaveButton.button().click($.proxy(function(){
        		console.log("/////////////////////////")
        			console.log(customCanvas)
                                var count =customCanvas.figures.data.length
                                 var workflow= {name:" ",shapesArray:[]}

                                 workflow.name=document.getElementById("workflowName").value
                                console.log(count)
                                var figArray= new Array()
                                 for(var i = 0; i<count ;i++ )
                                {
                                    var tempShape = new Object()
                                    var previous2= new Object()
                                    var next2 = new Object()
                                    var nextArray = new Array()
                                    var ShapesArray2= new Array()
                                    var userdata= []
                                    var label=[]
                                    tempShape.x= customCanvas.figures.data[i].x  //dh l figure bs [customCanvas.figures.data[i]]
                                    tempShape.y= customCanvas.figures.data[i].y
                                    tempShape.type= customCanvas.figures.data[i].cssClass
                                    tempShape.id= customCanvas.figures.data[i].id
                                    if(customCanvas.figures.data[i].userData!=null)
                                    {
                                    if (customCanvas.figures.data[i].cssClass==="diamond")
                                       {
                                    label=customCanvas.figures.data[i].userData
                                    label.unshift(customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].label.text)
                                     label.unshift(customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].label.text)
                                      label.unshift(customCanvas.figures.data[i].label.text)
                                        tempShape.userdata=label
                                        console.log(tempShape.userdata)
                                           }
                                   else  tempShape.userdata=customCanvas.figures.data[i].userData
                                    }
                                    else{
                                        if (customCanvas.figures.data[i].cssClass==="diamond"){
                                         label.push(customCanvas.figures.data[i].label.text)
                                         label.push(customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].label.text)
                                         label.push(customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].label.text)
                                         tempShape.userdata=label
                                          console.log(tempShape.userdata)
                                          }

                                        else
                                        tempShape.userdata=[]
                                        }
                                    if(customCanvas.figures.data[i].cssClass==="start")
                                    {
                                         previous2.type=null
                                         previous2.x=null
                                         previous2.y=null
                                         previous2.id="null"
                                    }
                                    else if(customCanvas.figures.data[i].inputPorts.data[0].connections.data.length!==0){
                                        console.log(customCanvas.figures.data[i].inputPorts.data[0].connections.data[0].sourcePort.parent.cssClass)
                                        previous2.type=customCanvas.figures.data[i].inputPorts.data[0].connections.data[0].sourcePort.parent.cssClass
                                        previous2.x=customCanvas.figures.data[i].inputPorts.data[0].connections.data[0].sourcePort.parent.x
                                        previous2.y=customCanvas.figures.data[i].inputPorts.data[0].connections.data[0].sourcePort.parent.y
                                        previous2.id=customCanvas.figures.data[i].inputPorts.data[0].connections.data[0].sourcePort.parent.id

                                    }
                                    else{
                                         previous2.type=null
                                         previous2.x=null
                                         previous2.y=null
                                         previous2.id="null"
                                    }
                                    if(customCanvas.figures.data[i].cssClass==="end")
                                    {
                                         next2.type=null
                                         next2.x=null
                                         next2.y=null
                                         next2.id="null"
                                         nextArray.push({type:next2.type , x:next2.x , y:next2.y , id:next2.id})
                                    }
                                    else if(customCanvas.figures.data[i].outputPorts.data[0].connections.data.length!== 0){


                                        //console.log(customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].targetPort.parent.cssClass)
                                        next2.type=customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].targetPort.parent.cssClass
                                        next2.x=customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].targetPort.parent.x
                                        next2.y=customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].targetPort.parent.y
                                        next2.id=customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].targetPort.parent.id
                                        nextArray.push({type:next2.type , x:next2.x , y:next2.y , id:next2.id})
                                       if(customCanvas.figures.data[i].cssClass==="diamond")
                                        {

                                             next2.type=customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].targetPort.parent.cssClass
                                             next2.x=customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].targetPort.parent.x
                                             next2.y=customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].targetPort.parent.y
                                             next2.id=customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].targetPort.parent.id
                                             nextArray.push({type:next2.type , x:next2.x , y:next2.y , id:next2.id})
                                        }


                                    }
                                    else{
                                        next2.type=null
                                         next2.x=null
                                         next2.y=null
                                         next2.id="null"
                                         nextArray.push({type:next2.type , x:next2.x , y:next2.y , id:next2.id})
                                    }
                                    tempShape.next=nextArray
                                    tempShape.previous=previous2

                                    ShapesArray2.push(tempShape)
                                    workflow.shapesArray.push(tempShape)
                                }
                                //Workflow.ShapesArray=ShapesArray2
                                console.log(figArray)

                                //Workflow.ShapesArray=figArray

                                console.log(workflow.shapesArray)
                                var urlParams = new URLSearchParams(window.location.search);

                                var token= urlParams.get('token'); //

                                $.ajax({
                    				type: "POST",
                    				url: "/workflow",
                    				 headers: {"Authorization": "Bearer "+token},
                    				data: JSON.stringify(workflow),
                    				success: success(),
                    				contentType: "application/json",
                    				dataType: 'json'
                    			  });

        		},this)).button( "option", "disabled", true );



		this.WorkflowName  = $("<input id = 'workflowName'></input>");
                		this.html.append(this.WorkflowName);


		function success(data){
			console.log("good")
			console.log(document.getElementById("workflowName").value)

		  }
		  function getSuccess(data)
                              {
                                console.log("GET SUCCESS")
                                 console.log(data)
                                 //console.log(data.name)
                                 //console.log(data.shapesArray)
                                 //
                                 //var temp=data.shapesArray
                                //
                                 //console.log(temp)
                                  var i =0
                                  var count=0
                                  var count2=0
                                  var size=0
                                  var shapesDone=0
                                  while(data[count2].type!=="start")
                                  {
                                      count2++
                                  }
                                 size=data.length
                                  var nextShape
                                  var Nextfigure1
                                  var Nextfigure2
                                  var nextsize
                                  var Nextfigure3
                                  var labels
                                  for(var x = 0;x <size-1;x++)
                                  {
                                    var count3=0
                                      if(count===0){
                                            var type = data[count2].type
                                            var figure = eval("new "+type+"();");
                                             figure.userData=data[count2].userdata
                                            customCanvas.add( figure, data[count2].x,data[count2].y,data[count2]);
                                           // customCanvas.figures.data[shapesDone].userData=data.shapesArray[count2].userdata
                                           // shapesDone++
                                           // var type2=data[count2].next[]type;
                                            //nextShape=data[count2].next
                                            nextShape=data[count2].next[0];
                                            var nexttype1=data[count2].next[0].type;//kanni nexts
                                             Nextfigure1=  eval("new "+nexttype1+"();");
                                             if (nexttype1=="diamond"){
                                                                                          for(var g=0;g<size-1;g++){
                                                                                          if(nexttype1==data[g].type){
                                                                                          labels=data[g].userdata[0]
                                                                                          break;
                                                                                          }
                                                                                          }
                                                                                          Nextfigure1.label.text=labels
                                                                                          }

                                           customCanvas.add( Nextfigure1, data[count2].next[0].x,data[count2].next[0].y);

                                           //customCanvas.figures.data[shapesDone].userData=data.shapesArray[count2].userdata
                                           //shapesDone++
                                           //count++;
                                       }
                                       else{
                                        figure=Nextfigure1
                                        if (figure.cssClass=="end"){
                                        console.log("i will break")
                                        break;
                                        }
                                        if (data[count].type!=="end")
                                            nextShape=data[count].next[0]
                                       while(nextShape.y!==data[count3].y||nextShape.x!==data[count3].x||nextShape.type!==data[count3].type)
                                       {
                                            count3++
                                            if(count3==size)
                                            count3=0
                                       }
                                       figure.userData=data[count3].userdata
                                       figure.next=data[count3].next
                                          if (figure.next.length>1){
                                            nexttype1=figure.next[0].type;
                                            Nextfigure1=eval("new "+nexttype1+"();");
                                           var nexttype2=figure.next[1].type
                                           Nextfigure2=  eval("new "+nexttype2+"();");
                                           Nextfigure1.userData=figure.next[0].userdata
                                           Nextfigure2.userData=figure.next[1].userdata
                                           /////////////////
                                           for (var g=0;g<data.length-1;g++){//atnen 3ndhm nfs l end
                                           if (data[g].x==data[count3].next[1].x&&data[g].y==data[count3].next[1].y &&data[g].type==data[count3].next[1].type)
                                                 Nextfigure3=data[g].next
                                           if (data[g].x==data[count3].next[0].x&&data[g].y==data[count3].next[0].y &&data[g].type==data[count3].next[0].type)
                                                                                            Nextfigure2.next=data[g].next
                                           }
                                          customCanvas.add( Nextfigure1, figure.next[0].x,figure.next[0].y);
                                         customCanvas.add( Nextfigure2, figure.next[1].x,figure.next[1].y);
                                           var c = new LabelConnection({
                                           	     source:figure.getOutputPort(1),
                                           	     target:Nextfigure1.getInputPort(0)
                                           	 });
                                           	figure.outputPorts.data[1].connections.data[0].label.text=figure.userData[1]
                                           	 customCanvas.add(c);
                                           	 var d = new LabelConnection({
                                           	  source:figure.getOutputPort(0),
                                           	   target:Nextfigure2.getInputPort(0)
                                           	   });
                                           	   figure.outputPorts.data[0].connections.data[0].label.text=figure.userData[2]
                                           	   customCanvas.add(d);
                                            Nextfigure3=Nextfigure2
                                            console.log(Nextfigure3)
                                             i++;
                                             count++;
                                             continue;
                                                        }
                                        else{
                                       nextShape=data[count3].next[0]
                                        nexttype1=data[count3].next[0].type
                                       Nextfigure1 = eval("new "+nexttype1+"();");
                                       Nextfigure1.userData=data[count3].userdata
                                       customCanvas.add( Nextfigure1, nextShape.x,nextShape.y);
                                       }
                                       //customCanvas.figures.data[shapesDone].userData=data.shapesArray[count3].userdata
                                       //shapesDone++
                                       console.log(type+"      ff   " +nexttype1)
                                       }
                                        if(Nextfigure1.cssClass=="end"&&Nextfigure3!=null)
                                            {
                                            var h = new draw2d.Connection();
                                            h.setSourceDecorator(new draw2d.decoration.connection.BarDecorator());
                                             h.setTargetDecorator(new draw2d.decoration.connection.BarDecorator());
                                              h.setSource(Nextfigure3.getOutputPort(0));
                                             h.setTarget(Nextfigure1.getInputPort(0));
                                              customCanvas.add(h);
                                                 }

                                        var c = new draw2d.Connection();

                                        c.setSourceDecorator(new draw2d.decoration.connection.BarDecorator());
                                        c.setTargetDecorator(new draw2d.decoration.connection.BarDecorator());
                                       // if(figure.type=="addition"&&Nextfigure1.type=="end"){)
                                       console.log(figure)
                                       console.log(Nextfigure1)
                                        c.setSource(figure.getOutputPort(0));
                                        //c.setSource(figure.getOutputPort(1));
                                        c.setTarget(Nextfigure1.getInputPort(0));
                                        //c.setTarget(Nextfigure2.getInputPort(0));
                                        customCanvas.add(c);

                                      i++;
                                      count++;
                              }
                              }


		// Inject the REDO Button and the callback
		//



	/**
	 * @method
	 * Called if the selection in the cnavas has been changed. You must register this
	 * class on the canvas to receive this event.
	 *
     * @param {draw2d.Canvas} emitter
     * @param {Object} event
     * @param {draw2d.Figure} event.figure
	 */
	 },
	onSelectionChanged : function(emitter, event){
		this.deleteButton.button( "option", "disabled", event.figure===null );
	},

	/**
	 * @method
	 * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
	 * can be used to identify the type of event which has occurred.
	 *
	 * @template
	 *
	 * @param {draw2d.command.CommandStackEvent} event
	 **/
	stackChanged:function(event)
	{
		this.undoButton.button( "option", "disabled", !event.getStack().canUndo() );
		this.SaveButton.button( "option", "disabled", !event.getStack().canUndo() );

		this.redoButton.button( "option", "disabled", !event.getStack().canRedo() );
	}
});

