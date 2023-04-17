import React from 'react'
import { Modal } from "semantic-ui-react"

export function BasicModal(props) {
    const { show, close, title, size, children } = props
  return (
    <Modal className='modalProfile' closeIcon open={show} onClose={close} size={size}>
        {title && <Modal.Header>{title}</Modal.Header>}
        <Modal.Content className='dateModal'>{children}</Modal.Content>
    </Modal>
  )
}

BasicModal.defaultProps = {
    size: "tiny",
}