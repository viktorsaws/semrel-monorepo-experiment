import { standalone } from '@aws/language-server-runtimes/runtimes'
import { RuntimeProps } from '@aws/language-server-runtimes/runtimes/runtime'
import {
    CodeWhispererSecurityScanServerTokenProxy,
    CodeWhispererServerTokenProxy,
    QChatServerProxy,
    QConfigurationServerTokenProxy,
    QNetTransformServerTokenProxy,
} from '@aws/lsp-codewhisperer/out/language-server/proxy-server'

const props: RuntimeProps = {
    version: '1.1.1',
    servers: [
        CodeWhispererServerTokenProxy,
        CodeWhispererSecurityScanServerTokenProxy,
        QConfigurationServerTokenProxy,
        QNetTransformServerTokenProxy,
        QChatServerProxy,
    ],
    name: 'Amazon Q Server',
}
standalone(props)
