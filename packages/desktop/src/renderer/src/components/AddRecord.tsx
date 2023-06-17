/* eslint-disable promise/prefer-await-to-then */
import { FC, useState } from 'react'
import { Firebase, Records } from '@health-box/common'
import { formatDate } from '@health-box/common'
import AddIcon from '@mui/icons-material/Add'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
  Alert,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  styled,
  TextField,
  Typography,
} from '@mui/material'

const Wrapper = styled(Box)(() => ({
  padding: '16px',
}))

const TextWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 100,
  marginRight: 'auto',
}))

const Title = styled(Typography)(() => ({
  fontSize: '24px',
  padding: '8px 16px',
}))

const Header = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '16px',
}))

const Form = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
}))

interface AddRecordProps {
  type: string
}

export const AddRecord: FC<AddRecordProps> = ({ type }) => {
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [value, setValue] = useState(0)

  const createRecord = () => {
    if (!value) return
    Firebase.postRecord(value, type)
      .then(() => {
        setOpen(false)
        setValue(0)

        return
      })
      .catch(() => setOpenAlert(true))
  }

  return (
    <Wrapper>
      <Header>
        <TextWrapper>
          <Title>
            {(Firebase.records.day[type] as Records[]).reduce((a, b) => a + b.value, 0)}{' '}
            {Firebase.stats[type].scale}
          </Title>
        </TextWrapper>
        <IconButton
          sx={{ flexShrink: 0 }}
          color="success"
          onClick={() => setOpen(true)}>
          <AddIcon />
        </IconButton>
      </Header>
      {open && (
        <Form component="form">
          <TextField
            sx={{ width: '100%' }}
            variant="standard"
            label="Введите значение"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            type="number"
          />
          <IconButton color="secondary" onClick={createRecord}>
            <ArrowForwardIosIcon />
          </IconButton>
          <IconButton color="error" onClick={() => setOpen(false)}>
            <DeleteIcon />
          </IconButton>
        </Form>
      )}
      <Divider />
      <List>
        {(Firebase.records.day[type] as Records[]).map((record) => (
          <ListItem key={record.time}>
            <ListItemText
              primary={`${record.value} ${Firebase.stats[type].scale}`}
              secondary={formatDate(record.time)}
            />
            <IconButton color="secondary">
              <EditIcon />
            </IconButton>
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={() => setOpenAlert(false)}>
        <Alert
          onClose={() => setOpenAlert(false)}
          severity="error"
          sx={{ width: '100%' }}>
          Произошла ошибка
        </Alert>
      </Snackbar>
    </Wrapper>
  )
}
