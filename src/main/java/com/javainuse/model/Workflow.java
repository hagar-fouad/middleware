package com.javainuse.model;

import lombok.Data;

import java.util.List;

@Data
public class Workflow {
    private String name;
    private List<Shape> shapesArray;

}
