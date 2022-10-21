package com.example.deparments.entities;

public class Category {

    private Long id;
    private String title;
    private String description;
    private String URLImage;

    public Category(Long id, String title, String description, String URLImage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.URLImage = URLImage;
    }

    public Category(String title, String description, String URLImage) {
        this.title = title;
        this.description = description;
        this.URLImage = URLImage;
    }

    public Category() { }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getURLImage() {
        return URLImage;
    }

    public void setURLImage(String URLImage) {
        this.URLImage = URLImage;
    }
}
