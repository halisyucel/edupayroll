package com.incubator.edupayroll.dto.school;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Value;

@Value
public class SchoolUpdateDTO {
    public String name;
    @JsonProperty("editor_name")
    public String editorName;
    @JsonProperty("editor_title")
    public String editorTitle;
    @JsonProperty("principal_name")
    public String principalName;
}
