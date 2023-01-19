import admin from 'firebase-admin';


const serviceAccount = {
    "type": "service_account",
    "project_id": "social-posting-app",
    "private_key_id": "f0b578ca628b653e95ab2670d815efbec7f21a80",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzp08SVv9D5JBO\n3IpOTzR+697dyIfUQwNFoESLxgIxwd4eXDNSkZfeRg3pWQ/T1+abnRYkYwWGDIqx\nkAbRJdizQnzEcYCLS3PjuwFAcsdtO++kMXm79mXCZuDSpx7fvfloUuXP7A0Tqtt8\nCAs+pFMB8kc2G0SYCEGH82jaGC7TnV6zBS5FCKhiP1MlKXxyU8QeEePDV147o4Bu\nYJHfvXjygMfr1mE4aNFny9ehfesMPUEp5Gz4ZyyRoLhy+FgClVhJFR+pzD8+ILn7\nMj1h3uPi+VOl8MjicgsGJ/4KIGxAXrl5KAFxiCUGcuBcrEcWy/RqOpKP/sU+k6Eb\nVhAtoKphAgMBAAECggEABdNq4cQe9odqs5f8xzHT2LrS6RvH5db/e+pI1sSGzTDF\ngHQKeQa+J0fbyyGnfP3vHURAk9D/PJvbAouSYQVqa9O/4onwunOpsCygC4Q9Wdo7\n+PXexfzlS2LVLxeazXQmap7nk3DK8sSTZggHv1IKXBGMhCFpvclkwKEg2RO4LwYJ\nKOFIkyB3A6VX6wrDIKgr6k/THXm/cW8Kys+PKdY8dUUOzs31TTxryKhyTlOHZsbd\nsr7iSucMMZcpCvkTy3GftwimXEywyTz170VFBd3xEf8isrp+Qp8Paym4G74unqL3\ny8F4AjnHKVWbyJmJw5K2dOAlHSEAsdWCJG/aOnGGcQKBgQDybB7ACAanYFC6Phf3\nXjjMnYMfnC3MMgLBDLOcaYPWOkPQ1uhYrjJ3xvVPh1M2YeZnkbKgA5ZY12sUcNcA\n5Auqm7JBgpjrIsE2nZ1r04S6lzCGlgwoSDMusShdBDceR0q/20gtZ1Pq/mZJ7+XG\nC2CgYezjZ3GWygGAdnnjB+hjeQKBgQC9tzPUTkneiy3b+wMqQ56WPFIBN+RofQbl\nw766sQzSBzm7zbz29cDIQgqLBUHlcYq9VYMS7+VxkaIgLs4aUP0d5MCQxBa9bK57\nTBctYzupzOOMiz9czUfMvHQ6bczVTCb8Na2BgPg5DeOO11cwS5hgGPl00xLZX2BK\noS/QPWOcKQKBgFalTlhUhgxM4I2wo+BGTQbVRYiGydeyCEn3wDqne/eV26dJKMKJ\ngIBPHF7Qf21wkGl0KeQHZDVcyWkE69PlrkXMYGoJw55HTce3jgx8DXSjlTSFbNL4\n+1I0/7g/SXQJBy6LscCIrfXP9791fyrJ5j9swL6GupKqoN7JeccrjGQBAoGAe/4N\nyNd2HhYW3ex7kBbrwkMgUZ2HEeeNJ4Q81uW6fFaunBkGRN4vpnLLUzsXa28+/ymx\nZiIWcph9Ps14dOiz1eLZHIScXCd5DiqYB1kQ+JRpsESeH/gm0h/lUv7KXinMXRB0\nGu0AzsFOFeCWIoF10HDiMUF2000rsPsSNea5gKkCgYA8uZeo7V/gTS4GKMayE79c\nSQFaGPi+NuQJ6m5ZpmeH8WHd0ErVlpr/rjWFWIDLoP7D+TOERPYbGLO3ogxCKuSv\n7bvp7NiKUaiGZxfksTZTPTZaklhgdnLpO6P2yECwSX6tOJTsB3eiHbxOXyrP0slF\nl49Akgn7468XgbQi0T4Vfw==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-qgr0l@social-posting-app.iam.gserviceaccount.com",
    "client_id": "107048324134990242787",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qgr0l%40social-posting-app.iam.gserviceaccount.com"
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://social-posting-app.firebaseio.com"
});

const bucket = admin.storage().bucket("gs://social-posting-app.appspot.com");

export default bucket;