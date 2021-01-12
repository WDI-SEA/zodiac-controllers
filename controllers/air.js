const express = require('express')
const router = express.Router()

// Air Route
router.get('/', (req,res) =>{
    let airSigns = ['aquarius','gemini','libra']
    let airTraits = ['movement','creativity', 'action','adventure','exciting','easily provoked']
    res.render('elementDisplay',{signs:airSigns,traits:airTraits})
})

// Air/aquarius Route
router.get('/aquarius', (req,res) =>{
    res.render('air/air.ejs',{url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAilBMVEX///8AAAD8/Pz5+fn29vbx8fEKCgoGBgbz8/MTExMNDQ3d3d3q6uoXFxfk5OSjo6OAgIBpaWmZmZm1tbW+vr7X19fMzMwbGxupqal4eHhsbGzn5+eOjo5cXFzS0tIgICCSkpK6urpCQkI5OTlWVlYpKSl9fX3IyMhQUFAwMDBGRkY7OzslJSViYmKPBb2bAAANkElEQVR4nO2dCX+iPBPAJwkoECQQDgEB8cSjfP+v907wqFZtfX7bLnbf/HfrWozsTDKZTA4SAI1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNJrfA+1bgB+FXv3zZbrfBKX0V8r9BewZrehzer9W7hyE/lwmw3pGZuqy7xDoWzCTiH8pDZtlec2/vJcRtrO+S+2kS7LZruaZdf79Vke8UuUrMrAXAn9hJ8Evxe9smUES2DvrR6V+GibGZDt2SOB2NQ0x7pSenBIyGhBn1MZAjbs3UtZcELKKflLaZ2HgFmRkb/eoWeZ2l26tiILpE+I4ZDggQzKfUbhbISljNXFWae/eg6o8dnOUtaySpW3bvnu8+DFdnDlkMCBKOdsh25CxD4lo92MWI3taG3dM+e+ipPFQr1XhAWsWxJ4Wxh2XTqFqh/bQGZB2ieoNB8NFepsGrdj1B+Nhbv4V2T+HKr3IoqEmZrIg9nBcsBvNKK02xBkOHdK6k8LGdwOyCO80e7wcTMme926ISjK+JCu0Pywn9BcpsUdE3Hg0ahBU2RnvVdWi4ZagjkOCrcOVS8R7jcmUDKpe7fDo/KCak314vIaXxAg1kwwuIkf8w9FGiUPK+HAtWig1yTSijJ4LF9+HYzLq3yHSzq8lW1I2FxlvoqHZb9LomqROP3yNWyygASm9UyqsjCPUbD87pFGJDcbECtXfprRfQ6TKzbNoTmrvXHoKLxugdJLCqZ0y8JKj9Gr5u4mhNaoinIdKs4Pft+qVQ0ZTwXqvYKyTL712AejWd9gIT8Ux0scfc03swZgsObjvX41WZDxwyOpQ2qjdJBg4qH/twv2W+2/CBBlFt/E6egBsr+TBWPGzgCg3H0yuXQLmyQD/jI/1M16g10Qv1HeE2CFsVb1uBYmUna1EV8/AKgg2YCTjgO3B0V0qhWk4tYcD5fWxhFy5IhhETrPT5z1CYfaW8/uChIvOC1ioiyVHZDAkbde2XRUZDUdde7YtqiRX4QiZ1uaz3bWfg0KzzdxHn3a+YSUpM+o3VSzl5M4NQKD52ehq9vjvYDR4ky8QcJg03pUPM5eCcAi6/dqVXX1r7/TAsGiMdK8iRwdjZywvW/QdHna4QXavz3UAhQ5tjC4wNCbo+loP7vauMIDcYM3CyBGj4nHUvxmq1tTPjE/qOHYjxQqta+gof+jBfRvD73O5sDEZGWevEB+qCuZPPgnomPosfSPO2O7q1yedENbIbLnM0NH03lFRYSIVnwaqKihiLCqx87WSaIf0Xnf6nNjknnkMrfovNeMkwYcwgV6+M6sw8uhRz+4apk6qz2MmdmjVE953lTuNcNCZn6/jx3mOmllAox0hU3TrnzhUbMWN2ZxE/ZdeF8F7GdrdofP4fvVDKuBr7JeMB2QTPY7gMQN47hD/x4T9D2CdazDyVZHuanYl8LWa8RKjYQwcbbLAvuh9zRij2HMlrXnVZegHZqj+lU2yYuE4u+iRV2Fohhi+j2zHGRG7eBBlMGjQ5yyrF9ALi6J5w6ZYMKN4s8kmeZAsxTCrG6VSMb3t+A/GFVH9MXbJe1dLEWKIoUZKgeZkRfbV5Wdn71kQ7Pbb9jht9hhnYITY3tOMYuv3ZovTkHCfUJauhnPRtcngblD6sXdTzyhTI6qD4bRFrXkwxqjeIZlxTnD6awjUndR/W4ePdK7NFFMSxCcvh8GfrWrIBUphS2JMPHRGhadaKS9z0CbHpDi5/VNn26zVINfS7T8IQXPx7ZGvRj2OA9YJVhFU9DpAMqQzVQ6xsLo04GZKz9HZg3SFqsbAR45DlnH/jgOz3ydTjPNO1QVDi2g7HKlxgDNY9dLpGP0hkWd5jZY4KqaXp/F7VWZeYA9GZFfdnc/4y3gt2cRXHsyAcDrqIt/3oCvsOmXT9DTWpgbbsmHXr8kPo8Yq7WyvujibCp6aGfxZeEDQG1xMCKkw0BJk5JDyvW85W6DjsLcpo+cedzePgQ26Q4rDCCSY6RgvDLG8MKTq1xQtmLRj3+2m8N6vKdZKs0MHC4uj2qJzt1choxfRL8O4Sbl/1KzTltdTNcW0a7qwuqcBuIN0lmG24/ujFGapJiByr1M0WRLlA2/HrauWDIboQTL0oelyMHC68dO+UcplJH1gM3yDygxzVRa8xG40IeLU4brAe1MexBlvfV/5zCGZN/3XLsqo7zSPPgQ3QDtTfgVVRC8xFcdZvWuswLGHajCVHIb2H87f/j0w+4UK6B7ksAFxq9qtTbEcEHu4EncFVg2XQ0YDtNQBOkRs/Fjvfp6xZhnCx7nWM6pRmqvgCOnG1Qx2W17Kg5hiS5zxCL3jW9HNbfRcYgbaWtg1qo+ymEG8UdHhAP1jajzw39i+s9h/U+qXkUUNSm8r4l8FLUbezCDfgNVLmeM2hE8nvJg3k6J5gTHgDlbdjlnfYKTL7bzwvk74QjzplqlrPrUq7AWGgM88JQpjQJ8R+oX0ek6Wc9D7aepfp5Ya5flP6V+DJ2rOxZsv3fhvUl2j0Wj+f6E3b/4R3hfn9SrGz3Bnwejvh178809pdwziX6W/+K2gZpGaZfinCkxBodqvPluu87s4hu3KEt1ylbHD6vmrD+k5xbuDYe8fdO/YC1bPYz+SQZ1l9WUv/6jKqcdy1K/71aAmve2svdIIAbzLZc4bX6LIx5XAJ4UPH7PjlPJhKoxBpYZ9Lxq/13xSkHYiitJsL4ba6PmHdkvUj6bm8e4KF+57+XQrbL3XU+wgobudmcuoGx02eewCNSM1x8B4p5Qbc6+bma53nqsequBojzP1fIHBMZVF5fIlmwq0stkY+DxR2d6MHWcswNussHS8DQcDkj0ZvXWTGP54h6kgWnrA96VHIdrE+HVvV8ILGqMVSrGd+rs3tYgxmYbMCpbo/XeVekLEU2vPSzDSuQss3niidSmIQC2E23ELko1HqZtP/f6XCtxAaZ2vtjIsdlhRWL7GSxJfwt0Ei6Y0gcqxp96hLqlv7EO0Vj9Ty2uXrgVha1o0Dfh21rcaH+nchbeTapEHKmb6DWUsr1ExnxkgWoNahUD3IjrFIr5Sg96iQHefFtjkiczF0gwh3bvKs7wUJrB6w9GHz9GHx/WEUbNNwYoajxlZzugkrcBl/tIAnlK5wTrHwwgzIwonlLVrLLXGArpPoZB9q3KJcorRuEH1+LyCSbBAHzFzEhBzySC1c2a06uk+b9NSI5DgL/E7+QZV8EtJQdoZ86Zq7rmso90rzWBYhc/FSqrGysoL3mb+Psy3O7ee55uqzmQetW2+5NWuDMIiMKEhIc+ydesV22AZFxs/n5UFRElDFru05/mxK1i62Zcp65rhpNz5E0sERbFOxzHPF21k1PPM87L9RprFJsM6NGnnu5J7m3lZxctF0BjZzjesYjcP0sR6Ib3QFL3K68IjNUHrWWrdERV+tMU2O8ZG1+KGWvY8YeBOuiUdVoWXqRejy5zEmNxVi+WspnFfYYH6V0g5mb5kJPGHMPTvoyfmPH8drCiq6T+oGAaA8+1LrC//dqxQ/IMFpvhqelaj0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go3mghc5ROvPeBffuHh3b1/352708Vt97a17cesazieNGRXAzSkDNL56PD2J793lVlQu6ol6Cr8QHEIZGsDquoiAyzq1wJ3VqXp0P8TrsqiLmIlCVuDJWj48BPI/U3avltqxw60pZOZxkyV2Ksu0udzHPXzy5ASudsyB0He5CUnqm2Bk3DXBayZSQCK5wPtMshyVdJOMQ2I2a8OMuJDfsMeTUazzGQRp4HMrwByNw1UhV8UskWufg1+kicgyGedZ4RV5MANe5FkSNZ4fYjYYdZaHhgiyFJI8C0SRH06SpPEpz3MOht8YKld4zYBlsdXteBFlIEPwMkazqjtFI6ktVbbdkd4z/883WaCur3Z5CRJIE9gAFK5VqAKkqeCRD+sImIjUMQUJNJLynKXqRLWZlN1pDIk6qaryqdfiW1q1pnc4UocvTocLtRMwWln46qQk3wLmF5kqbddvGJqd6VthxDJTZdEMzcVfy+58oe/YVYfNUlQJTTGdqVd/YvoAO7AKEYUJrE2giUhDkDHgK2wMqQ7nipZF9+VQgNISr6OlgVmiwJ1ik+3pDK/WQ8USTMiwrK1uIy78X0yZAsU7uVmcpaKNDPxi9wD8xJ9QS6bfcXyBpZ6qhyUK2UBpGLk78bsSQ0MBFyub2pckydThjFENPIBUHZM8S4WgpgtJYVFa+TApIRHAWszzTjFa8eMRDLkLtI7wWwy8Gj2uBbxEvaJDroQ1i6uoTZi6LTAXvGDC5PfsgmT6+XoGbecQCr9Yelaex3Ue8qLFGrXmaBjBWsIsz00Z5BGK12ZmGEEhUmGwIggiKlUdawR4OUzWl97TaHxShpBkwToG2b7lnAdtG8FsuwzWWDqlr7bOcX2sY3mjzlgtc0mb7aat/2z/goszzW72GjnW3psDWo/Xjbs+69qCjgdRfO4H6DHFt7ZqH33qx70gL34777H3tADvu/Kxhy0+vXztOdh5XjF2vUnf4/fv20t8m26PbvTZf/DsIRP06U13f6ioftQCfvDm/wPLub3cWL11ZgAAAABJRU5ErkJggg=='})
})

// Air/gemini Route
router.get('/gemini', (req,res) =>{
    res.render('air/air.ejs',{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyha0CHQixpkmvrO1JGdE2PS6j4gLgMbwxhA&usqp=CAU'})
})

// Air/libra Route
router.get('/libra', (req,res) =>{
    res.render('air/air.ejs',{url:'data:image/png;base64,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'})
})

module.exports = router