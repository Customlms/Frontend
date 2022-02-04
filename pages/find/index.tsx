import { NextPage } from "next";
import { Button } from "@mui/material";

const selectFind: NextPage = () => {
    return (
        <div id="selectFindForm" className="selectFindForm">
            <h1>What do you want to do?</h1>
            <Button href="/find/id">Find id</Button>
            <Button href="/find/password">Find password</Button>
        </div>
    )
}

export default selectFind;