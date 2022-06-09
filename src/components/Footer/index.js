import { Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Title from '../TitleWithBottomBorder'

export default function Index() {
  return (
    <Grid container className="bg-[#131a21] p-[5px] sm:p-5" direction="row">
      <Container maxWidth="lg">
        <Grid className="bg-[#131a21] p-5" container direction="row">
          <Grid item lg={3} xs={12} className="pl-2 my-3 pb-1 lg:pl-10">
            <Title title="فروشگاه کفش" />
            <Typography
              variant="body2"
              color="textSecondary"
              className="mt-1 leading-8 text-sm"
            >
              تهران، میدان توحید، خیابان دکتر قریب، پلاک 26، ساختمان شباهنگ
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="mt-1 leading-8 text-sm"
            >
              تلفن تماس: 02166438930
            </Typography>
          </Grid>
          <Grid item lg={3} xs={12} className="pl-2 my-3 pb-1 lg:pl-10">
            <Title title="ویژگی ها" />
            <Typography
              variant="body2"
              color="textSecondary"
              className="mt-1 leading-8 text-sm"
            >
              ارسال رایگان
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="mt-1 leading-8 text-sm"
            >
              امکان برگشت کالا تا هفت روز
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="mt-1 leading-8 text-sm"
            >
              اصالت کالا
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="mt-1 leading-8 text-sm"
            >
              قیمت مناسب و بصرفه
            </Typography>
          </Grid>
          <Grid item lg={3} xs={6} className="pl-2 my-3 pb-1 lg:pl-10">
            <Title title="برندها" />
            <Button
              variant="text"
              className="lg:w-1/3 flex justify-start"
              size="small"
            >
              <Typography
                variant="body2"
                color="primary"
                className="mt-1 leading-8 text-sm"
              >
                آدیداس
              </Typography>
            </Button>

            <Button
              variant="text"
              className="lg:w-1/3 flex justify-start"
              size="small"
            >
              <Typography
                variant="body2"
                color="primary"
                className="mt-1 leading-8 text-sm"
              >
                اسکچرز
              </Typography>
            </Button>

            <Button
              variant="text"
              className="lg:w-1/3 flex justify-start"
              size="small"
            >
              <Typography
                variant="body2"
                color="primary"
                className="mt-1 leading-8 text-sm"
              >
                نایک
              </Typography>
            </Button>

            <Button
              variant="text"
              className="lg:w-1/3 flex justify-start"
              size="small"
            >
              <Typography
                variant="body2"
                color="primary"
                className="mt-1 leading-8 text-sm"
              >
                پوما
              </Typography>
            </Button>
          </Grid>
          <Grid item lg={3} xs={6} className="pl-2 my-3 pb-1 lg:pl-10">
            <Title title="لینک های مفید" />
            <Button
              variant="text"
              className="lg:w-1/2 flex justify-start"
              size="small"
            >
              <Typography
                variant="body2"
                color="primary"
                className="mt-1 leading-8 text-sm"
              >
                سوالات متداول
              </Typography>
            </Button>
            <Button
              variant="text"
              className="lg:w-1/3 flex justify-start"
              size="small"
            >
              <Typography
                variant="body2"
                color="primary"
                className="mt-1 leading-8 text-sm"
              >
                بلاگ
              </Typography>
            </Button>
            <Button
              variant="text"
              className="lg:w-1/3 flex justify-start"
              size="small"
            >
              <Typography
                variant="body2"
                color="primary"
                className="mt-1 leading-8 text-sm"
              >
                تماس با ما
              </Typography>
            </Button>
            <Button
              variant="text"
              className="lg:w-1/3 flex justify-start"
              size="small"
            >
              <Typography
                variant="body2"
                color="primary"
                className="mt-1 leading-8 text-sm"
              >
                درباره ما
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}
