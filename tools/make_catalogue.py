import re, os
from reportlab.lib.pagesizes import A4
from reportlab.platypus import BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle, Image, PageBreak, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import mm
from PIL import Image as PI

src = open("src/data/products.js", encoding="utf-8").read()
cats = re.findall(r'^  "(.*?)",$', src.split("export const products")[0], re.M)
items = [dict(id=m[1], name=m[2], cat=int(m[3]), img=m[4], short=m[5]) for m in re.finditer(
    r'id: "(.*?)", name: "(.*?)", category: categories\[(\d)\].*?image: "(.*?)",\s*\n\s*short: "(.*?)"', src, re.S)]

BLUE = colors.HexColor("#087EAE"); GREEN = colors.HexColor("#269C58"); LIGHT = colors.HexColor("#EAF7FA")
DARK = colors.HexColor("#202B35"); NAVY = colors.HexColor("#0F2E3D"); MUTED = colors.HexColor("#5B6B78")
W, H = A4

def cover(c, doc):
    c.saveState(); c.setFillColor(NAVY); c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(BLUE); c.setFillAlpha(0.5); c.circle(W - 30*mm, H - 60*mm, 55*mm, fill=1, stroke=0)
    c.setFillColor(GREEN); c.setFillAlpha(0.5); c.circle(W - 10*mm, 70*mm, 35*mm, fill=1, stroke=0); c.setFillAlpha(1)
    if os.path.exists("public/images/logo.png"):
        c.drawImage("public/images/logo.png", 25*mm, H - 60*mm, 28*mm, 28*mm, mask="auto")
    c.setFillColor(colors.white); c.setFont("Helvetica-Bold", 34); c.drawString(25*mm, H - 95*mm, "Aqua Care Solutions")
    c.setFont("Helvetica-Oblique", 15); c.setFillColor(colors.HexColor("#7FD3A3")); c.drawString(25*mm, H - 106*mm, "We Treat the Water Naturally...")
    c.setFillColor(colors.white); c.setFont("Helvetica", 14); c.drawString(25*mm, H - 130*mm, "Product Catalogue")
    c.setFont("Helvetica", 11); c.drawString(25*mm, H - 138*mm, "Domestic & Industrial RO Systems - Sales & Service")
    c.setFont("Helvetica-Bold", 11); c.drawString(25*mm, 50*mm, "ISO 9001:2015 Certified Company"); c.setFont("Helvetica", 10)
    lines = ["Giri S  |  72000 10271  |  98942 40380", "aquacaresolutions777@gmail.com",
             "No.15, 3rd Street, Gandhi Nagar, Nandivaram, Guduvancheri,", "Chengalpattu, Tamil Nadu - 603 202"]
    for i, t in enumerate(lines):
        c.drawString(25*mm, 42*mm - i*5.5*mm, t)
    c.restoreState()

def body(c, doc):
    c.saveState(); c.setFillColor(BLUE); c.rect(0, H - 14*mm, W, 14*mm, fill=1, stroke=0)
    c.setFillColor(colors.white); c.setFont("Helvetica-Bold", 11); c.drawString(18*mm, H - 9*mm, "Aqua Care Solutions")
    c.setFont("Helvetica", 9); c.drawRightString(W - 18*mm, H - 9*mm, "Product Catalogue")
    c.setFillColor(MUTED); c.setFont("Helvetica", 8.5)
    c.drawString(18*mm, 10*mm, "72000 10271  |  98942 40380  |  aquacaresolutions777@gmail.com")
    c.drawRightString(W - 18*mm, 10*mm, "Page %d" % doc.page)
    c.restoreState()

doc = BaseDocTemplate("public/Aqua-Care-Solutions-Catalogue.pdf", pagesize=A4,
                      title="Aqua Care Solutions - Product Catalogue", author="Aqua Care Solutions")
doc.addPageTemplates([
    PageTemplate("cover", [Frame(0, 0, W, H)], onPage=cover, autoNextPageTemplate="body"),
    PageTemplate("body", [Frame(18*mm, 16*mm, W - 36*mm, H - 36*mm, leftPadding=0, rightPadding=0)], onPage=body)])

h = ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=15, textColor=BLUE, spaceBefore=8, spaceAfter=6)
n = ParagraphStyle("n", fontName="Helvetica-Bold", fontSize=12, textColor=DARK, leading=15)
d = ParagraphStyle("d", fontName="Helvetica", fontSize=10, textColor=MUTED, leading=14)

st = [Spacer(1, 1), PageBreak()]
for ci, cn in enumerate(cats):
    group = [i for i in items if i["cat"] == ci]
    for k, it in enumerate(group):
        p = "public" + it["img"] if it["img"] else ""
        img = Spacer(40*mm, 30*mm)
        if p and os.path.exists(p):
            w, hh = PI.open(p).size
            s = min(40*mm / w, 30*mm / hh)
            img = Image(p, w*s, hh*s)
        else:
            print("Photo missing for:", it["name"], p)
        row = Table([[img, [Paragraph(it["name"], n), Spacer(1, 3), Paragraph(it["short"], d), Spacer(1, 3),
                            Paragraph("Price on request. Call or WhatsApp 72000 10271.", d)]]],
                    colWidths=[46*mm, W - 36*mm - 46*mm])
        row.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
                                 ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#D5E6EC")),
                                 ("LEFTPADDING", (0, 0), (-1, -1), 8), ("TOPPADDING", (0, 0), (-1, -1), 6),
                                 ("BOTTOMPADDING", (0, 0), (-1, -1), 6)]))
        block = ([Paragraph(cn, h)] if k == 0 else []) + [row, Spacer(1, 6)]
        st.append(KeepTogether(block))

doc.build(st)
print("Catalogue created:", len(items), "products -> public/Aqua-Care-Solutions-Catalogue.pdf")