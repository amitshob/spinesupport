import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ConsultationRequest {
  email: string;
  height: string;
  weight: string;
  age: string;
  waistSize: string;
  zipcode: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, height, weight, age, waistSize, zipcode }: ConsultationRequest = await req.json();

    // Validate required fields
    if (!email || !height || !weight || !age || !waistSize || !zipcode) {
      throw new Error("All fields are required");
    }

    console.log("Sending consultation email for:", email);

    const emailResponse = await resend.emails.send({
      from: "Spine Support <onboarding@resend.dev>",
      to: ["amitshob@gmail.com"],
      subject: "New Consultation Request - Spine Support",
      html: `
        <h1>New Consultation Request</h1>
        <p>A new consultation form has been submitted with the following details:</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Height</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${height}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Weight</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${weight}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Age</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${age}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Waist Size</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${waistSize}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Zipcode</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${zipcode}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666;">This email was sent from the Spine Support consultation form.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-consultation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
