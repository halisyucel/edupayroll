package com.incubator.edupayroll.entity.export;

import com.incubator.edupayroll.entity.base.BaseEntity;
import com.incubator.edupayroll.entity.document.DocumentEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "export")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ExportEntity extends BaseEntity {

  @Column(name = "url", nullable = false)
  private String url;

  @ManyToOne
  @JoinColumn(name = "document_id", nullable = false)
  private DocumentEntity document;
}
