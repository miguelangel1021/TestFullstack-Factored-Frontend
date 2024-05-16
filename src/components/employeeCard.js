import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';


function EmployeeCard (props){
  const [avatarUrl, setAvatarUrl] = useState('');
  const employee = props.employee
  
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const avatar = data.results[0].picture.large;
        setAvatarUrl(avatar);
      })
      .catch(error => console.error('Error fetching avatar:', error));
  }, []);

  return (
    <Card>
        <CardContent style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Avatar src={avatarUrl} alt="Avatar" style={{ width: 190, height: 190, marginBottom: '16px' }} />
            <div style={{ textAlign: 'center' }}>
            <Typography variant="h5" component="div" mb = {2}>
                {employee.name}
            </Typography>
            <Typography color="text.secondary" variant="body1" gutterBottom>
                {employee.email}
            </Typography>
            <Typography color="text.secondary" variant="body1" gutterBottom>
                Phone Number: {employee.phoneNumber}
            </Typography>
            <Typography color="text.secondary" variant="body1" gutterBottom>
                Position: {employee.position}
            </Typography>
            <Typography color="text.secondary" variant="body1" gutterBottom>
                Department: {employee.department}
            </Typography>
            </div>
        </CardContent>
    </Card>
  );
};

export default EmployeeCard;