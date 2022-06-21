def factorial(nr)
puts (1..nr).inject { |sum, n| sum * n }
end

factorial(6)

class Fixnum
  def factorial
      raise "Exception " if self < 0
      puts (1..self).inject { |sum, n| sum * n } if self >= 0
  end
end

6.factorial

module CoreExtensions
  module InstanceModule
    def square
      puts self * self
    end
  end
end
Fixnum.include CoreExtensions::InstanceModule

7.square

class Fixnum
  def r(nr)
    res = []
    nr.times do 
      res.push(rand(100))
    end
    puts res.to_s
  end
  alias_method "random", :r
end
1.random(4)