package com.example.deparments.entities;


import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category {

    @Id
    @SequenceGenerator(name = "categorie_sequence", sequenceName = "categorie_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categorie_sequence")
    private Long id;
    @Column
    private String title;
    @Column
    private String description;
    @Column
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
