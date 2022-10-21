package com.example.deparments.repositories;

import com.example.deparments.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Long> { }
