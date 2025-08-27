import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Button, List, ListItem, ListItemAvatar, DialogTitle, Dialog } from '@mui/material';
import { Verified } from '@mui/icons-material';

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle sx={{ fontWeight: '400', fontStyle: 'italic' }}>Thanks, Form Submitted!</DialogTitle>
            <List sx={{ pt: 0 }} c>

                <ListItem sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ListItemAvatar className='   d-flex' >
                        <Avatar sx={{ background: '#4ebe19ff' }}>
                            <Verified />
                        </Avatar>
                    </ListItemAvatar>
                </ListItem>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function DialogBox() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const [textVal, setTextVal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTextVal('')
        console.log('form submitted')
        setOpen(true)
    }
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}

            />
            <Box className='  d-flex' sx={{ flexWrap: 'wrap', gap: '0.5rem' }}>
                <form onSubmit={textVal && handleSubmit}>
                    <input placeholder='Your email' type="email" required value={textVal} onChange={(e) => setTextVal(e.target.value)} className='input' />

                    <Button variant="contained" size='large' type='submit'
                        sx={{ color: 'white', background: '#141414ff', Radius: 0, transform: 'skew(-5deg)' }}
                    >Subscribe Now</Button>
                </form>
            </Box>
        </div>
    );
}
