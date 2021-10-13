import React from 'react';
import {Borrow} from "../organisms/Borrow";
import {TemplateScreen} from "./DepositScreen";

export const BorrowScreen = () => {
  return (
      <TemplateScreen
          title={"Borrow"}
          body={<Borrow />}
      />
  );
};
