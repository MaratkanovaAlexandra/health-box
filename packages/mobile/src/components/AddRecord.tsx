import {
  AddRecordHeader,
  AddRecordTextWrapper,
  AddRecordTitle,
  AddRecordForm,
  AddRecordWrapper,
  colors,
} from '@health-box/common';
import React, {FC, useState} from 'react';
// import {Firebase} from '@health-box/common';
// import {formatDate} from '@health-box/common';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Divider, List, Text, TextInput} from 'react-native-paper';
import {AddIcon, ArrowIcon, DeleteIcon} from '../icons';
// import AddIcon from '@mui/icons-material/Add';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import {
//   Alert,
//   Box,
//   Divider,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   Snackbar,
//   styled,
//   TextField,
//   Typography,
// } from '@mui/material';

// const Wrapper = styled(Box)(() => ({
//   padding: '16px',
// }));

// const TextWrapper = styled(Box)(({theme}) => ({
//   backgroundColor: theme.palette.background.paper,
//   borderRadius: 100,
//   marginRight: 'auto',
// }));

// const Title = styled(Typography)(() => ({
//   fontSize: '24px',
//   padding: '8px 16px',
// }));

// const Header = styled(Box)(() => ({
//   display: 'flex',
//   alignItems: 'center',
//   paddingBottom: '16px',
// }));

// const Form = styled(Box)(() => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: '16px',
// }));

interface AddRecordProps {
  type: string;
}

export const AddRecord: FC<AddRecordProps> = ({type}) => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [value, setValue] = useState(0);

  const createRecord = () => {
    // if (!value) {
    //   return;
    // }
    // Firebase.postRecord(value, type)
    //   .then(() => {
    //     setOpen(false);
    //     setValue(0);
    //     return;
    //   })
    //   .catch(() => setOpenAlert(true));
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>
            {/* {Firebase.records.day[type].reduce((a, b) => a + b.value, 0)}{' '}
            {Firebase.stats[type].scale}
             */}
            1200 ккал
          </Text>
        </View>

        <TouchableOpacity onPress={() => setOpen(true)}>
          <AddIcon />
        </TouchableOpacity>
      </View>
      {open && (
        <View style={styles.form}>
          {/* sx={{width: '100%'}}
          variant="standard"
          label="Введите значение"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
          type="number" */}
          <TextInput
            style={styles.input}
            activeOutlineColor={colors.purple}
            mode="outlined"
            outlineColor={colors.middle_gray}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <ArrowIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
      )}
      <Divider />
      <List.Section>
        <List.Item title="567 ккал" description="08:30 13.06.23" />
        <List.Item title="360 ккал" description="11:30 13.06.23" />
        <List.Item title="273 ккал" description="14:45 13.06.23" />
      </List.Section>

      {/* <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={() => setOpenAlert(false)}>
        <Alert
          onClose={() => setOpenAlert(false)}
          severity="error"
          sx={{width: '100%'}}>
          Произошла ошибка
        </Alert>
      </Snackbar> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: AddRecordHeader(true),

  textWrapper: AddRecordTextWrapper(colors.tilted_purple, true),

  title: AddRecordTitle(true),

  form: {
    ...AddRecordForm(true),
    gap: 16,
  },

  input: {
    width: '80%',
    backgroundColor: 'transparent',
  },
});
