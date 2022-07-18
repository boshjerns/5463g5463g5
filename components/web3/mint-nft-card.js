import { Button, Card, CardActions, CardContent, Input, Typography } from '@mui/material';
import Image from 'next/image';

const MintNFTCard = ({title, description, action, canMint, showNumToMint, setNumToMint, mintStatus}) => {
  const handleChange = (event) => {
    const numToMint = parseInt(event.target.value);
    setNumToMint(numToMint);
  };

  return (
    <Card sx={{ 
      
      maxWidth: 1000, backgroundColor:'#ffffff80', borderRadius:'10px',
     
      
      }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Image alt="sample NFT" src='/bgbgbg.png' width={1500} height={500}/>
        {mintStatus ? <p>Success! Check your wallet in a few minutes.</p> : <p>{description}</p>}
      </CardContent>
      <CardActions>
        {showNumToMint &&
          <Input onChange={handleChange} defaultValue={2} type="number" label="number to mint"
            sx={{mx: 3}}
          />}
        <Button disabled={!canMint} onClick={action} variant="contained">Claim</Button>
      </CardActions>
    </Card>
  );
}

export default MintNFTCard;