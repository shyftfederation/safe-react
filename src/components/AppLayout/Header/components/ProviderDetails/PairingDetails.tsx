import { CSSProperties, ReactElement } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import RefreshIcon from '@material-ui/icons/Refresh'
import IconButton from '@material-ui/core/IconButton'
import { Divider, Link } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

import Paragraph from 'src/components/layout/Paragraph'
import Row from 'src/components/layout/Row'
import usePairing from 'src/logic/wallets/pairing/hooks/usePairing'
import { initPairing, isPairingModule } from 'src/logic/wallets/pairing/utils'
import { useGetPairingUri } from 'src/logic/wallets/pairing/hooks/useGetPairingUri'
import { OVERVIEW_EVENTS } from 'src/utils/events/overview'
import Track from 'src/components/Track'

const StyledDivider = styled(Divider)`
  width: calc(100% + 40px);
  margin-left: -20px;
`

const QR_DIMENSION = 120

const qrRefresh: CSSProperties = {
  width: QR_DIMENSION,
  height: QR_DIMENSION,
}

const PairingDetails = ({ classes }: { classes: Record<string, string> }): ReactElement => {
  const uri = useGetPairingUri()
  const isPairingLoaded = isPairingModule()
  usePairing()

  return (
    <>
      <StyledDivider />
    </>
  )
}

export default PairingDetails
