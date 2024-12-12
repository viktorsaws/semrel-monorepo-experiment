import { standalone } from '@aws/language-server-runtimes/runtimes'
import { RuntimeProps } from '@aws/language-server-runtimes/runtimes/runtime'
import {
    CodeWhispererSecurityScanServerTokenProxy,
} from '@aws/lsp-codewhisperer/out/language-server/proxy-server'

const props: RuntimeProps = {
    version: '1.1.1',
    servers: [
        CodeWhispererSecurityScanServerTokenProxy,
    ],
    name: 'Amazon Second Server',
}
standalone(props)

// 1: Some change
// 2: Some change
// 3: Some change 3