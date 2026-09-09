from rest_framework import generics
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer
import logging

logger = logging.getLogger(__name__)

TARGET_EMAIL = 'kandhikanti@yahoo.co.in'

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        instance = serializer.save()

        # Send email to kandhikanti@yahoo.co.in
        subject = f"New Project Inquiry from {instance.name} - JK Engineers & Enterprises"
        message_body = (
            f"Hello JK Engineers Team,\n\n"
            f"A new client inquiry has been submitted through the website form:\n\n"
            f"--------------------------------------------------\n"
            f"Client Name:  {instance.name}\n"
            f"Phone Number: {instance.phone}\n"
            f"--------------------------------------------------\n\n"
            f"Project Details & Message:\n"
            f"{instance.message}\n\n"
            f"--------------------------------------------------\n"
            f"Target Recipient: {TARGET_EMAIL}\n"
        )
        from_email = getattr(settings, 'DEFAULT_FROM_EMAIL', 'noreply@jkengineers.com')

        try:
            send_mail(
                subject=subject,
                message=message_body,
                from_email=from_email,
                recipient_list=[TARGET_EMAIL],
                fail_silently=False,
            )
            logger.info(f"Successfully notified {TARGET_EMAIL} for message ID {instance.id}")
        except Exception as e:
            logger.warning(f"Could not send email to {TARGET_EMAIL} via SMTP: {e}")
