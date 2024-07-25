package com.incubator.edupayroll.dto.document;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.YearMonthDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.YearMonthSerializer;
import com.incubator.edupayroll.dto.export.Export;
import com.incubator.edupayroll.dto.record.Record;
import jakarta.validation.constraints.NotNull;
import java.time.YearMonth;
import java.util.List;
import java.util.UUID;
import lombok.Value;

@Value
public class Document {

  @NotNull public String name;

  @NotNull
  @JsonSerialize(using = YearMonthSerializer.class)
  @JsonDeserialize(using = YearMonthDeserializer.class)
  public YearMonth time;

  @NotNull public String description;

  @NotNull public UUID user;

  @NotNull public List<Export> exports;

  @NotNull public List<Record> records;
}
