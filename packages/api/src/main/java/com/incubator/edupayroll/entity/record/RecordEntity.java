package com.incubator.edupayroll.entity.record;

import com.incubator.edupayroll.entity.base.BaseEntity;
import com.incubator.edupayroll.entity.document.DocumentEntity;
import com.incubator.edupayroll.entity.teacher.TeacherEntity;
import com.incubator.edupayroll.utils.CourseType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "record")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class RecordEntity extends BaseEntity {

    @Column(name = "line", nullable = false)
    private int line;

    @Enumerated(EnumType.STRING)
    @Column(name = "course_type", nullable = false)
    private CourseType courseType;

    @Column(name = "information", nullable = false)
    private String information;

    @OneToOne
    @JoinColumn(name = "teacher_id", nullable = false)
    private TeacherEntity teacher;

    @ToString.Exclude
    @ManyToOne
    @JoinColumn(name = "document_id", nullable = false)
    private DocumentEntity document;

}