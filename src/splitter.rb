
flines=File.readlines("splitter.txt")
puts flines
flines.each do |line|
  c=line.split("")
  c.each do |x|
    print "{Blocker(\"#{x}\")}"
  end
end
