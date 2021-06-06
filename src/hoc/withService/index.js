import { ServiceConsumer } from '../../components/srvices-context'
import React from 'react'

const withService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <ServiceConsumer>
        {(service) => {
          const serviceProps = mapMethodsToProps(service)
          return <Wrapped {...props} {...serviceProps} />
        }}
      </ServiceConsumer>
    )
  }
}

export default withService
