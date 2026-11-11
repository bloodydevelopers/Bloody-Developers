#!/bin/bash
set -e

SRC="public/assets/aistudio/IMG_9025_57708f30.PNG"
OUT="public/assets/extracted"
mkdir -p "$OUT"

# 1. Logo
convert "$SRC" -crop 170x42+50+5 +repage "$OUT/logo.png"

# 2. Hero character with cybernetic effects
convert "$SRC" -crop 508x290+514+55 +repage "$OUT/hero_character.png"

# 3. Product Screens (The laptop screens with red glow and interface)
convert "$SRC" -crop 205x88+56+515 +repage "$OUT/product_attendance.png"
convert "$SRC" -crop 205x88+286+515 +repage "$OUT/product_cafe.png"
convert "$SRC" -crop 205x88+516+515 +repage "$OUT/product_task.png"
convert "$SRC" -crop 205x88+746+515 +repage "$OUT/product_school.png"

convert "$SRC" -crop 205x88+56+724 +repage "$OUT/product_singlevendor.png"
convert "$SRC" -crop 205x88+286+724 +repage "$OUT/product_multivendor.png"
convert "$SRC" -crop 205x88+516+724 +repage "$OUT/product_crm_erp.png"
convert "$SRC" -crop 68x90+750+742 +repage "$OUT/custom_solution_cube.png"

# 4. Custom Software Dev Devices (Laptop + Phone)
convert "$SRC" -crop 185x160+330+1004 +repage "$OUT/custom_dev_mockup.png"

# 5. Marketing Analytics Screen + Graph
convert "$SRC" -crop 160x125+800+972 +repage "$OUT/marketing_analytics_mockup.png"

# 6. Industry Cards
convert "$SRC" -crop 125x98+48+1255 +repage "$OUT/industry_education.png"
convert "$SRC" -crop 125x98+184+1255 +repage "$OUT/industry_healthcare.png"
convert "$SRC" -crop 125x98+320+1255 +repage "$OUT/industry_food.png"
convert "$SRC" -crop 125x98+456+1255 +repage "$OUT/industry_retail.png"
convert "$SRC" -crop 125x98+592+1255 +repage "$OUT/industry_manufacturing.png"
convert "$SRC" -crop 125x98+728+1255 +repage "$OUT/industry_realestate.png"
convert "$SRC" -crop 125x98+864+1255 +repage "$OUT/industry_professional.png"

echo "Refined asset extraction completed successfully!"
