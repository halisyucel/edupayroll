package com.incubator.edupayroll.dto.teacher;

import jakarta.validation.constraints.NotNull;
import java.util.UUID;
import lombok.Value;

@Value
public class Teacher {
  @NotNull public UUID id;

  @NotNull public String firstName;

  @NotNull public String lastName;

  @NotNull public String branch;

  @NotNull public String identityNo;
}
