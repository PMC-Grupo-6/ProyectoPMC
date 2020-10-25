import React from 'react'
import Container from '@material-ui/core/Container';
import Card from "./LegalizeCard"

export default function LegalizeProcess() {
    return (
        <Container maxWidth="sm" style={{height: "100%",display: "flex", alignItems: "center"}}>
        <Card/>
      </Container>
    )
}