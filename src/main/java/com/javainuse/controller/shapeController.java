package com.javainuse.controller;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.javainuse.model.Shape;
import com.javainuse.model.Shape2;
import com.javainuse.model.Workflow;
import org.json.simple.parser.ParseException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.io.IOException;

import java.io.FileReader;
import java.util.Iterator;


import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;
@RestController
public class shapeController {
    //Shape[] temp = new Shape[100];
    @Value("${json.dir}")
            private String dir;


    @PostMapping("/wn")
    public void sendname(@RequestBody String x)  {

        x=x.substring(0, x.length() - 1);

    }
    @GetMapping("/workflow/{name}")
    public Shape[] getShape(@PathVariable String name) throws IOException, ParseException {
        name=name+".json";
        System.out.println(name+"hagar");
        final int[] j = {0};
        Object obj = new JSONParser().parse(new FileReader(dir+name));
        // typecasting obj to JSONObject
        JSONArray jsonArray = (JSONArray ) obj;
        Shape[] array = new Shape[jsonArray.size()];
        jsonArray.forEach(item -> {
            JSONObject jo = (JSONObject) item;
            long myX = (long) jo.get("x");

            array[j[0]]=new Shape();
            array[j[0]].setX(myX);

            long myY = (long) jo.get("y");
            array[j[0]].setY(myY);

            String myType = (String) jo.get("type");

            array[j[0]].setType(myType);
            String myID = (String) jo.get("id");

            array[j[0]].setId(myID);
            JSONArray ja = (JSONArray) jo.get("next");
            int k=0;
            Shape2[] mynexttemp=new Shape2[ja.size()];
            Iterator i = ja.iterator();

            while (i.hasNext()) {
                JSONObject slide = (JSONObject) i.next();
                String nexttype = (String)slide.get("type");

                mynexttemp[k]=new Shape2();
                mynexttemp[k].setType(nexttype);
                 long nextX=(long)slide.get("x");

                mynexttemp[k].setX(nextX);
                long nextY=(long)slide.get("y");

                mynexttemp[k].setY(nextY);
                k++;
            }
            array[j[0]].setNext(mynexttemp);
            JSONArray userdata = (JSONArray) jo.get("userdata");
            String[] Myuserdata=new String[userdata.size()];
            k=0;
            if (userdata != null) {
                for (Object mydata : userdata) {
                    Myuserdata[k]=new String();
                   Myuserdata[k]=mydata.toString();
                   k++;
                }
            }
            array[j[0]].setUserdata(Myuserdata);
            JSONObject previous =  (JSONObject) jo.get("previous");
            Shape2 temp=new Shape2();
            long f=(long)previous.get("x");
            temp.setX(f);
            f=(long)previous.get("y");
            temp.setY(f);
            temp.setType((String) previous.get("type"));
            array[j[0]].setPrevious(temp);

         j[0]++;
        });

return array;
    }

    @PostMapping("/workflow")
    public String saveShape(@RequestBody Workflow x) throws IOException {
        try {
            String Filename=dir+x.getName()+".json";
            System.out.println(Filename);
            Writer writer = new FileWriter(Filename);
            System.out.println(x);
            new Gson().toJson(x.getShapesArray(), writer);
            writer.close();

        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "success";
    }
}

