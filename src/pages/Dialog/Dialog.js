import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@material-ui/icons/Close';

import Typography from '@mui/material/Typography';
import Form from '../../components/Form/Form';
import { Button } from '../../globalStyles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0),
    border: theme.spacing('none'),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(0),
  },
  '& .MuiIconButton-root':{
    color: theme.spacing('#fff'),
  }

}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
 
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
     
    
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button primary onClick={handleClickOpen}>
        SIGN UP
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby=""
        open={open}>
        <BootstrapDialogTitle id="" onClose={handleClose}>
       
        </BootstrapDialogTitle>
        <DialogContent dividers>
           <Form />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}