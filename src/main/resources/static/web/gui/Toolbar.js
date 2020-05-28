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

		  this.OpenButton  = $("<button>Open</button>");
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
                                    label.unshift(customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].label.text)
                                     label.unshift(customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].label.text)
                                      label.unshift(customCanvas.figures.data[i].label.text)
                                        tempShape.userdata=label
                                        console.log(tempShape.userdata)
                                           }
                                   else  tempShape.userdata=customCanvas.figures.data[i].userData
                                    }
                                    else{
                                        if (customCanvas.figures.data[i].cssClass==="diamond"){
                                         label.unshift(customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].label.text)
                                         label.unshift(customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].label.text)
                                          label.unshift(customCanvas.figures.data[i].label.text)
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
                                      if(customCanvas.figures.data[i].cssClass==="diamond")
                                        {
                                             next2.type=customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].targetPort.parent.cssClass
                                             next2.x=customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].targetPort.parent.x
                                             next2.y=customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].targetPort.parent.y
                                             next2.id=customCanvas.figures.data[i].outputPorts.data[1].connections.data[0].targetPort.parent.id
                                             nextArray.push({type:next2.type , x:next2.x , y:next2.y , id:next2.id})
                                        }

                                        //console.log(customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].targetPort.parent.cssClass)
                                        next2.type=customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].targetPort.parent.cssClass
                                        next2.x=customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].targetPort.parent.x
                                        next2.y=customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].targetPort.parent.y
                                        next2.id=customCanvas.figures.data[i].outputPorts.data[0].connections.data[0].targetPort.parent.id
                                        nextArray.push({type:next2.type , x:next2.x , y:next2.y , id:next2.id})



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
                                 var size=data.length
                                 var figure
                                 var Nextfigure
                                 var nextOfShape
                                 var count=0
                                 var nextOfShape2
                                 var nextOfShape3
                                 var Nextfigure3
                                 for(var x=0;x<size;x++)
                                 {
                                  if(data[count].type=="end")
                                  break;
                                  if(count==0){
                                  figure=eval("new "+data[count].type+"();");//start//add
                                  figure.userData=data[count].userdata
                                  customCanvas.add( figure, data[count].x,data[count].y);
                                  nextOfShape=data[count].next[0]
                                  }
                                  else{//eb2a rsmt l shkl dh abl kda
                                  figure=Nextfigure
                                  nextOfShape=data[count].next[0]
                                  if(figure.cssClass=="diamond"){
                                  nextOfShape=data[count].next[1]
                                  nextOfShape2=data[count].next[0]
                                  }
                                  }

                                  for(var g=0;g<size;g++){//34an ageb l next class kaml
                                  if(figure.cssClass=="diamond"){
                                  if (nextOfShape2.type==data[g].type&&nextOfShape2.x==data[g].x&&nextOfShape2.y==data[g].y)
                                  nextOfShape2=data[g]
                                  }
                                  if (nextOfShape.type==data[g].type&&nextOfShape.x==data[g].x&&nextOfShape.y==data[g].y){
                                     console.log("d5l l if")
                                     nextOfShape=data[g]
                                     count=g;
                                  }
                                  }

                                  if(figure.cssClass=="diamond"){
                                  Nextfigure=eval("new "+nextOfShape.type+"();");
                                   Nextfigure.userData=nextOfShape.userdata
                                     var c = new LabelConnection({
                                     source:figure.getOutputPort(1),
                                     target:Nextfigure.getInputPort(0)
                                                                 });
                                     figure.outputPorts.data[1].connections.data[0].label.text=figure.userData[1]

                                   }
                                   else{
                                   Nextfigure=eval("new "+nextOfShape.type+"();");//add//end
                                   Nextfigure.userData=nextOfShape.userdata
                                   }
                                   if (nextOfShape.type=="diamond"){
                                   Nextfigure.label.text=nextOfShape.userdata[0]
                                   }

                                   customCanvas.add( Nextfigure, nextOfShape.x,nextOfShape.y);

                                  if (figure.cssClass=="diamond"){
                                  var c = new LabelConnection({
                                  source:figure.getOutputPort(0),
                                  target:Nextfigure.getInputPort(0)
                                                              });
                                  figure.outputPorts.data[0].connections.data[0].label.text=figure.userData[2]
                                     customCanvas.add(c);
                                   var Nextfigure2=eval("new "+nextOfShape2.type+"();");
                                   Nextfigure2.userData=nextOfShape2.userdata
                                   console.log(nextOfShape2)
                                   customCanvas.add( Nextfigure2, nextOfShape2.x,nextOfShape2.y);
                                     var d = new LabelConnection({
                                            source:figure.getOutputPort(1),
                                            target:Nextfigure2.getInputPort(0)
                                                         });
                                   figure.outputPorts.data[1].connections.data[1].label.text=figure.userData[1]
                                    customCanvas.add(d);
                                    if(nextOfShape2.next!=null){
                                    Nextfigure3=Nextfigure2
                                    nextOfShape3=nextOfShape2.next[0]
                                     for(var g=0;g<size;g++){
                                     if (nextOfShape3.type==data[g].type&&nextOfShape3.x==data[g].x&&nextOfShape3.y==data[g].y){
                                     nextOfShape3=data[g]
                                     break;
                                     }
                                     }
                                    }
                                  }
                                  else{
                                  if(Nextfigure3!=null){
                                  if(Nextfigure.cssClass==nextOfShape3.type&&Nextfigure.x==nextOfShape3.x&&nextOfShape3.y==nextOfShape3.y){
                                                var h = new draw2d.Connection();
                                                h.setSourceDecorator(new draw2d.decoration.connection.BarDecorator());
                                                 h.setTargetDecorator(new draw2d.decoration.connection.BarDecorator());
                                                 h.setSource(Nextfigure3.getOutputPort(0));
                                                 h.setTarget(Nextfigure.getInputPort(0));
                                                  customCanvas.add(h);
                                                                     }
                                                                     }
                                   var c = new draw2d.Connection();
                                   c.setSourceDecorator(new draw2d.decoration.connection.BarDecorator());
                                   c.setTargetDecorator(new draw2d.decoration.connection.BarDecorator());
                                   c.setSource(figure.getOutputPort(0));
                                   c.setTarget(Nextfigure.getInputPort(0));
                                   customCanvas.add(c);

                                   }


                                 }//bta3t l for
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

