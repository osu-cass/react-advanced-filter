import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BasicFilter } from "../../src/";
import {
  propsRadioBtn,
  propsDropDown,
  selectedHandler,
  basicFilterOption,
  advancedFilterOptionsArray,
  basicFilterCategoryDropDown,
  basicFilterCategoryRadioBtn
} from "./mocks";
import { CenterDecorator } from "../CenterDecorator";
import { GradeLevel } from "../../src/GradeLevels/GradeLevels";

storiesOf("Basic Filter", module)
  .addDecorator(CenterDecorator)
  .add("DropDown: one filter item", () => <BasicFilter {...propsDropDown} />)
  .add("DropDown: multiple filter items", () => (
    <BasicFilter
      {...propsDropDown}
      filterOptions={advancedFilterOptionsArray}
    />
  ))
  .add("RadioBtn: one filter item", () => <BasicFilter {...propsRadioBtn} />)
  .add("RadioBtn: multiple filter items", () => (
    <BasicFilter
      {...propsRadioBtn}
      filterOptions={advancedFilterOptionsArray}
    />
  ));