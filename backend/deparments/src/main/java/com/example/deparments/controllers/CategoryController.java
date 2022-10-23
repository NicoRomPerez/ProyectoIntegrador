package com.example.deparments.controllers;

import com.example.deparments.entities.Category;
import com.example.deparments.exceptions.ResourceNotFoundException;
import com.example.deparments.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorias")
public class CategoryController {

    @Autowired
    private ICategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<Category>> getCategories() {
        List<Category> categories = categoryService.getCategories();
        return ResponseEntity.ok( categories );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") Long id)
            throws ResourceNotFoundException {
        Optional<Category> category = categoryService.getCategoryById(id);
        if ( category.isPresent() ) {
            return ResponseEntity.ok( category.get() );
        } else {
            throw new ResourceNotFoundException("The category was not found");
        }
    }

    @PostMapping
    public ResponseEntity<Category> saveCategory(@RequestBody Category category) {
        return ResponseEntity.ok( categoryService.saveCategory(category) );
    }

    @PutMapping
    public ResponseEntity<Category> updateCategory(@RequestBody Category category)
            throws ResourceNotFoundException {
        Optional<Category> searchedCategory = categoryService.getCategoryById( category.getId() );
        if (searchedCategory.isPresent()) {
            return ResponseEntity.ok( categoryService.updateCategory(category) );
        } else {
            throw new ResourceNotFoundException("The category was not found");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long id) throws ResourceNotFoundException {
        Optional<Category> searchedCategory = categoryService.getCategoryById(id);
        if (searchedCategory.isPresent()) {
            categoryService.deleteCategory(id);
            return ResponseEntity.ok("The category with ID: " + id + " was deleted successfully");
        } else {
            throw new ResourceNotFoundException("The category was not found");
        }
    }

}
