import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'
import FaqIcon from '@mui/icons-material/Quiz'
import BlogIcon from '@mui/icons-material/FormatBold'
import AboutIcon from '@mui/icons-material/Info'
import ContactIcon from '@mui/icons-material/PermContactCalendar'
import LoginIcon from '@mui/icons-material/Login'
import { Link, useLocation } from 'react-router-dom'
import brandLogo from '../../../assets/images/brandLogo.png'

export default function MenuItems() {
  const location = useLocation()
  const path = location.pathname
  return (
    <div className="bg-[#131a21] w-[250px] h-full p-3">
      <div className="w-full flex justify-center items-center p-6 border-b-[1px] border-b-solid border-b-[#393c41]">
        <img src={brandLogo} alt="logo" className="w-40" />
      </div>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText className="text-right">
            <Typography
              variant="body2"
              color={path === '/' ? 'textPrimary' : 'textSecondary'}
            >
              صفحه اصلی
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/faq">
          <ListItemIcon>
            <FaqIcon color="primary" />
          </ListItemIcon>
          <ListItemText className="text-right">
            <Typography
              variant="body2"
              color={path === '/faq' ? 'textPrimary' : 'textSecondary'}
            >
              سوالات پر تکرار
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/blog">
          <ListItemIcon>
            <BlogIcon color="primary" />
          </ListItemIcon>
          <ListItemText className="text-right">
            <Typography
              variant="body2"
              color={path === '/blog' ? 'textPrimary' : 'textSecondary'}
            >
              بلاگ
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemIcon>
            <AboutIcon color="primary" />
          </ListItemIcon>
          <ListItemText className="text-right">
            <Typography
              variant="body2"
              color={path === '/about' ? 'textPrimary' : 'textSecondary'}
            >
              درباره ما
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemIcon>
            <ContactIcon color="primary" />
          </ListItemIcon>
          <ListItemText className="text-right">
            <Typography
              variant="body2"
              color={path === '/contact' ? 'textPrimary' : 'textSecondary'}
            >
              تماس با ما
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemIcon>
            <LoginIcon color="primary" />
          </ListItemIcon>
          <ListItemText className="text-right">
            <Typography
              variant="body2"
              color={path === '/login' ? 'textPrimary' : 'textSecondary'}
            >
              ورود / ثبت نام
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  )
}
