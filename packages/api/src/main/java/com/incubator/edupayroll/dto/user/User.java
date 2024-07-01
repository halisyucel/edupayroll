package com.incubator.edupayroll.dto.user;

import jakarta.validation.constraints.NotNull;
import java.util.UUID;
import lombok.Value;

@Value
public class User {
  @NotNull public UUID id;

  @NotNull public String name;

  @NotNull public String email;
}
