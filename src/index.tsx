import * as React from "react"
import * as ReactDOM from "react-dom"

import { Box } from "./components/shared/Box"
import { Launch as LaunchHook } from "./components/hook/LaunchHook"
import { Launch as LaunchRenderProps } from "./components/renderProps/LaunchRenderProps"
import { Launch as LaunchComposition } from "./components/composition/LaunchComposition"

ReactDOM.render(
    <>
        <Box color="#faa"><><LaunchHook /> Function component with hooks and confirm</></Box>
        <Box><><LaunchRenderProps/> Class component with render props</></Box>
        <Box><><LaunchComposition/> Class component with composition</></Box>
    </>,
    document.getElementById("app")
)