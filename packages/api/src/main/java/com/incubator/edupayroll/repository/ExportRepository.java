package com.incubator.edupayroll.repository;

import com.incubator.edupayroll.entity.ExportEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ExportRepository extends JpaRepository<ExportEntity, UUID> {

}