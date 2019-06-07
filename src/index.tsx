import * as React from "react"
import * as ReactDOM from "react-dom"

import { Box } from "./components/Box"
import { Launch as LaunchHook } from "./components/LaunchHook"
import { Launch as LaunchRenderProps } from "./components/LaunchRenderProps"
import { Launch as LaunchComposition } from "./components/LaunchComposition"
import { Launch as LaunchHookNoConfirm } from "./components/LaunchHookNoConfirm"
import { Launch as LaunchClassNoConfirm } from "./components/LaunchClassNoConfirm"

ReactDOM.render(
    <>
        <Box color="#76b8c1"><><LaunchHookNoConfirm/> Function component with hooks without confirm</></Box>
        <Box color="#76b8c1"><><LaunchClassNoConfirm/> Class component without confirm</></Box>
        <Box color="#faa"><><LaunchHook /> Function component with hooks and confirm</></Box>
        <Box><><LaunchRenderProps/> Class component with render props</></Box>
        <Box><><LaunchComposition/> Class component with composition</></Box>
    </>,
    document.getElementById("app")
)